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
  console.log(req.body)
  //console.log(req.body)

  // const user_id = id
  const sql = `INSERT INTO estate (user_id, beni_name, address, relationbeni, property, type_of)
   VALUES(?, ?, ?, ?, ?, ?)`

  db.query(
    sql,
    [user_id, namebeni, addressbeni, relationbeni, property, typebeni],
    (err, results, fields) => {
      console.log(err)
      res.json({
        message: "added asset full name",
        results
      })
    }
  )
})

router.get("/estateRouter/:user_id", (req, res, next) => {
  const userId = req.params.user_id
  const getsql = `SELECT user_id, beni_name, address, relationbeni, property, type_of 
  FROM estate WHERE user_id = ?`

  db.query(getsql, [userId], (err, results, fields) => {
    res.json(results)
  })
})
module.exports = router
