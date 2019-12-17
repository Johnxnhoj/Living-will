const router = require("express").Router()
const db = require("../db")
const axios = require("axios")

router.post("/executor", (req, res, next) => {
  const user_id = req.body.user_Id
  const full_name = req.body.fullName
  const city = req.body.cityName
  const county = req.body.countyName
  const state = req.body.stateName

  console.log(req.body)

  // const sql = `
  // INSERT INTO executor ( user_id, full_name, city, county, state)
  // VALUES (?,?,?,?,?) `

  // db.query(
  //   sql,
  //   [user_id, full_name, city, county, state],
  //   (err, results, fields) => {
  //     if (err) {
  //       throw new Error(err)
  //     } else {
  //       res.json({
  //         message: "Completed Executor",
  //         results
  //       })
  //     }
  //   }
  // )
  const sql3 = `SELECT * FROM executor WHERE user_id = ?`

  db.query(sql3, [user_id], (err, results, fields) => {
    if (results.length > 0) {
      const sql1 = `UPDATE executor SET full_name = ?, city = ?, county = ?, state = ? WHERE user_id = ?`
      db.query(
        sql1,
        [full_name, city, county, state, user_id],
        (err, results, fields) => {
          if (err) {
            console.log(err)
          }
          res.json(results)
        }
      )
    } else {
      console.log(replacing)
      const sql2 = `INSERT INTO executor (user_id, full_name, city, county, state)
      VALUES(?, ?, ?, ?, ?)`

      db.query(
        sql2,
        [user_id, full_name, city, county, state],
        (err, results, fields) => {
          console.log(err)
          res.json({
            message: "added executor full name",
            results
          })
        }
      )
    }
  })
})

router.get("/executorRouter", (req, res, next) => {
  const userId = req.query.id
  const getsql = `SELECT user_id, full_name, city, county, state
  FROM executor WHERE user_id =?`

  db.query(getsql, [userId], (err, results, fields) => {
    res.json(results)
  })
})

module.exports = router
