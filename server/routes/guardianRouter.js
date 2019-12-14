const router = require("express").Router()
// const axios = require("axios")
const db = require("../db")

router.post("/CareTaker", (req, res, next) => {
  const user_id = req.body.input.user_Id
  const childName = req.body.input.childname
  const guardianName = req.body.input.guardianName
  const altGuardianName = req.body.input.altGuardianName
  const extraGuardianName = req.body.input.extraGuardianName
  console.log(req.body)

  const sql = `
  INSERT INTO CareTaker (user_id, child_name, Guardian_Name, alt_Guardian_Name, extra_Guardian_Name)
   VALUES(?, ?, ?, ?, ?)`

  db.query(
    sql,
    [user_id, childName, guardianName, altGuardianName, extraGuardianName],
    (err, results, fields) => {
      console.log(err)
      res.json({
        message: "added child full name",
        results
      })
    }
  )
})

router.get("/CareTaker/:user_id", (req, res, next) => {
  const userId = req.params.id
  // const user = resp.data.results[0]
  const getsql = `SELECT child_name, Guardian_Name, alt_Guardian_Name, extra_Guardian_Name 
  FROM CareTaker WHERE user_id = ?`

  db.query(getsql, [userId], (err, results, fields) => {
    res.json(results)
  })
})

module.exports = router
