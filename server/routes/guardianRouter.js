const router = require("express").Router()
const axios = require("axios")
const db = require("../db")

const guard = []

const people = {}

router.get("/guardianRouter", (req, res, next) => {
  axios.get("/care_taker").then(resp => {
    const user = resp.data.results[0]
  })
})

router.post("/CareTaker", (req, res, next) => {
  // console.log(info)
  // res.json({ message: "Hello" })
  // childname, guardianName, altGuardianName, extraGuardianName
  const childName = req.body.input.childname
  const guardianName = req.body.input.guardianName
  const altGuardianName = req.body.input.altGuardianName
  const extraGuardianName = req.body.input.extraGuardianName
  console.log(childName, guardianName, altGuardianName, extraGuardianName)

  const user_id = resp.data.id
  const sql = `INSERT INTO CareTaker (user_id, child_name, Guardian_Name, alt_Guardian_Name, extra_Guardian_Name)
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

module.exports = router
