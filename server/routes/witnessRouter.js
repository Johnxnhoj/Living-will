const router = require("express").Router()
const axios = require("axios")
const db = require("../db")
const guard = []
const people = {}
router.get("/witnessRouter", (req, res, next) => {
  axios.get("/witness").then(resp => {
    const user = resp.data.results[0]
  })
})
router.post("/witness", (req, res, next) => {
  const nameWit1 = req.body.nameWit1
  const nameWit2 = req.body.nameWit2
  const DateW = req.body.DateW

  console.log(nameWit1, nameWit2, DateW)
  const id = 26
  const user_id = 28
  const sql = `INSERT INTO witness (user_id, Wit_1, Wit_2, Date_W)
   VALUES(?, ?, ?, ?)`
  db.query(
    sql,
    [user_id, nameWit1, nameWit2, DateW],
    (err, results, fields) => {
      console.log(err)
      res.json({
        message: "added Witness",
        results
      })
    }
  )
})
module.exports = router
