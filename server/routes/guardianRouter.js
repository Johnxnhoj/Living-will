const router = require("express").Router()
const axios = require("axios")

const guard = []

const people = {}
router.get("/guardianRouter", (req, res, next) => {
  axios.get("/care_taker").then(resp => {
    const user = resp.data.results[0]
  })
})

router.post("/CareTaker", (req, res, next) => {
  const info = req.body.input
  const id = 26
  const user_id = 30
  const sql = `INSERT INTO Caretaker (Child_Full_Name,user_id,id)
   VALUES(?, ?, ?)`
  db.query(sql, [input, user_id, id], (err, results, fields) => {
    res.json({
      message: "added child full name",
      results
    })
  })
})

module.exports = router
