const router = require("express").Router()
const db = require("../db")
const axios = require("axios")

router.post("/", (req, res, next) => {
  const full_name = req.body.fullName
  const city = req.body.city
  const county = req.body.county
  const state = req.body.state
  const id = 10
  const user_id = 30

  console.log(req.body)

  const sql = `
  INSERT INTO executor (id, user_id, full_name, city, county, state) 
  VALUES (?,?,?,?,?,?) `

  db.query(
    sql,
    [id, user_id, full_name, city, county, state],
    (err, results, fields) => {
      if (err) {
        throw new Error(err)
      } else {
        res.json({
          message: "Completed Executor",
          results
        })
      }
    }
  )
})

router.get("/executorRoutes", (req, res, next) => {
  const getsql = `SELECT id, user_id, full_name, city, county, state
  FROM executor`

  db.query(getsql, (err, results, fields) => {
    res.json(results)
  })
})

module.exports = router
