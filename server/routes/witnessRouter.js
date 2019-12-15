const router = require("express").Router()
const axios = require("axios")
const db = require("../db")
// const guard = []
// const people = {}

router.get("/witness/:user_id", (req, res, next) => {
  const userId = req.params.user_Id
  const getsql = `SELECT id, user_id, Wit_1, Wit_2, Date_W
  FROM witness`

  db.query(getsql, [userId], (err, results, fields) => {
    res.json(results)
  })
})

router.post("/witness", (req, res, next) => {
  const user_id = req.body.user_Id
  const nameWit1 = req.body.nameWit1
  const nameWit2 = req.body.nameWit2
  const DateW = req.body.DateW
  // console.log(nameWit1, nameWit2, DateW)

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
