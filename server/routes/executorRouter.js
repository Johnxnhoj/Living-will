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

  const sql = `
  INSERT INTO executor ( user_id, full_name, city, county, state) 
  VALUES (?,?,?,?,?) `

  db.query(
    sql,
    [user_id, full_name, city, county, state],
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

router.get("/executor/:user_id", (req, res, next) => {
  const userId = req.params.user_Id
  const getsql = `SELECT id, user_id, full_name, city, county, state
  FROM executor WHERE user_id =?`

  db.query(getsql, [userId], (err, results, fields) => {
    res.json(results)
  })
})

module.exports = router
