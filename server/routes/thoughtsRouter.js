const router = require("express").Router()
const db = require("../db")
const axios = require("axios")

router.post("/Thoughts", (req, res, next) => {
  const user_thoughts = req.body.userThoughts
  const user_id = 20

  console.log(req.body)

  const sql = `
  INSERT INTO Thoughts (user_id, user_thoughts) 
  VALUES (?,?) `

  db.query(sql, [user_id, user_thoughts], (err, results, fields) => {
    if (err) {
      throw new Error(err)
    } else {
      res.json({
        message: "Completed Thoughts",
        results
      })
    }
  })
})

router.get("/thoughtsRoutes", (req, res, next) => {
  const getsql = `SELECT user_thoughts
  FROM Thoughts`

  db.query(getsql, (err, results, fields) => {
    res.json(results)
  })
})

module.exports = router
