const router = require("express").Router()
const db = require("../db")
const axios = require("axios")

router.post("/thoughts", (req, res, next) => {
  const user_thoughts = req.body.userThoughts
  const user_id = req.body.user_Id

  console.log(req.body)

  const sql = `
  INSERT INTO Thoughts (user_id, user_thoughts) 
  VALUES (?,?) `

  db.query(sql, [user_id, user_thoughts], (err, results, fields) => {
    if (err) {
      throw new Error(err)
    } else {
      res.json({
        message: "Completed Thoughts",
        results
      })
    }
  })
})

router.get("/thoughts/:user_id", (req, res, next) => {
  const thoId = req.params.user_id
  const getsql = `SELECT user_thoughts
  FROM Thoughts WHERE user_id =?`

  db.query(getsql, [thoId], (err, results, fields) => {
    res.json(results)
  })
})

module.exports = router
