const router = require("express").Router()
const axios = require("axios")
const db = require("../db")
// const guard = []
// const people = {}

router.post("/witness", (req, res, next) => {
  const user_id = req.body.user_Id
  const nameWit1 = req.body.nameWit1
  const nameWit2 = req.body.nameWit2
  const DateW = req.body.DateW
  // console.log(nameWit1, nameWit2, DateW)

  // const sql = `INSERT INTO witness (user_id, Wit_1, Wit_2, Date_W)
  // VALUES(?, ?, ?, ?)`
  // db.query(
  //   sql,
  //   [user_id, nameWit1, nameWit2, DateW],
  //   (err, results, fields) => {
  //     console.log(err)
  //     res.json({
  //       message: "added Witness",
  //       results
  //     })
  //   }
  // )
  const sql3 = `SELECT * FROM witness WHERE user_id = ?`

  db.query(sql3, [user_id], (err, results, fields) => {
    if (results.length > 0) {
      const sql1 = `UPDATE witness SET Wit_1 = ?, Wit_2, Date_W WHERE user_id = ?`
      db.query(
        sql1,
        [nameWit1, nameWit2, DateW, user_id],
        (err, results, fields) => {
          if (err) {
            console.log(err)
          }
          res.json(results)
        }
      )
    } else {
      console.log(results)
      const sql2 = `INSERT INTO witness ( user_id, Wit_1, Wit_2, Date_W)
      VALUES(?, ?, ?, ?)`

      db.query(
        sql2,
        [user_id, nameWit1, nameWit2, DateW],
        (err, results, fields) => {
          console.log(err)
          res.json({
            message: "added witness full name",
            results
          })
        }
      )
    }
  })
})
router.get("/witness/:user_id", (req, res, next) => {
  const witId = req.params.user_id
  const getsql = `SELECT Wit_1, Wit_2, Date_W
    FROM witness WHERE user_id =?`

  db.query(getsql, [witId], (err, results, fields) => {
    res.json(results)
  })
})

module.exports = router
