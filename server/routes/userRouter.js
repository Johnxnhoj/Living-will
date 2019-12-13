const router = require("express").Router()
const uuid = require("uuid/v4")
const sha512 = require("js-sha512")
const db = require("../db")
const config = require("config")
const jwt = require("jsonwebtoken")

router.post("/register", (req, res, next) => {
  const salt = uuid()
  const username = req.body.username
  const password = sha512(req.body.password + salt)

  const sql = `INSERT INTO users (username, password, salt) VALUES (?, ?, ?)`

  db.query(sql, [username, password, salt], (err, results, fields) => {
    if (err) {
      throw new Error(err)
    }
    res.json({
      message: "User created",
      results
    })
  })
})

router.post("/login", (req, res, next) => {
  const username = req.body.username

  db.query(
    "SELECT salt FROM users WHERE username = ?",
    [username],
    (err, results, fields) => {
      if (results.length > 0) {
        const password = sha512(req.body.password + results[0].salt)
        // const userId = results[0].id

        const sql = `SELECT id, count(1) as count FROM users WHERE username = ? AND password = ?`


        // console.log(
        //   `SELECT count(1) as count FROM users WHERE username = '${username}' and password = ${password}`
        // )

        db.query(sql, [username, password], (err, results, fields) => {
          console.log(results)
          if (results[0].count > 0) {
            const token = jwt.sign(
              { id: results[0].id, username },
              config.get("secret")
            )
            console.log(token)
            res.json({
              id: results[0].id,
              message: "Auothenticated",
              token
            })
          } else {
            res.status(401).json({
              message: "Username or Password are incorrect"
            })
          }
        })
      } else {
        res.status(401).json({
          message: "User doesn't exist"
        })
      }
    }
  )
})

module.exports = router
