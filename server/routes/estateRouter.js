const router = require("express").Router()
// const axios = require("axios")
const db = require("../db")

router.post("/estate", (req, res, next) => {
  const user_id = req.body.user_Id
  const namebeni = req.body.namebeni
  const addressbeni = req.body.addressbeni
  const relationbeni = req.body.relationbeni
  const typebeni = req.body.typebeni
  const property = req.body.property
  //console.log(req.body)

  // const user_id = id
  // const sql = `INSERT INTO estate (user_id, beni_name, address, relationbeni, property, type_of)
  //  VALUES(?, ?, ?, ?, ?, ?)`

  // db.query(
  //   sql,
  //   [user_id, namebeni, addressbeni, relationbeni, property, typebeni],
  //   (err, results, fields) => {
  //     console.log(err)
  //     res.json({
  //       message: "added asset full name",
  //       results
  //     })
  //   }
  // )
  const sql3 = `SELECT * FROM estate WHERE user_id = ?`

  db.query(sql3, [user_id], (err, results, fields) => {
    if (results.length > 0) {
      const sql1 = `UPDATE estate SET beni_name = ?, address = ?, relationbeni = ?, property = ?, type_of = ? WHERE user_id = ?`
      db.query(
        sql1,
        [namebeni, addressbeni, relationbeni, property, typebeni, user_id],
        (err, results, fields) => {
          if (err) {
            console.log(err)
          }
          res.json(results)
        }
      )
    } else {
      console.log(results)
      const sql2 = `INSERT INTO estate ( user_id,beni_name, address, relationbeni, property, type_of)
      VALUES(?, ?, ?, ?, ?, ?)`

      db.query(
        sql2,
        [user_id, namebeni, addressbeni, relationbeni, property, typebeni],
        (err, results, fields) => {
          console.log(err)
          res.json({
            message: "added asset full name",
            results
          })
        }
      )
    }
  })
})

router.get("/estateRouter", (req, res, next) => {
  const userId = req.query.id
  const getsql = `SELECT user_id, beni_name, address, relationbeni, property, type_of 
  FROM estate WHERE user_id = ?`

  db.query(getsql, [userId], (err, results, fields) => {
    // console.log(results)
    res.json(results)
  })
})
module.exports = router
