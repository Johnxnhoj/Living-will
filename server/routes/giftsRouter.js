const router = require("express").Router()
const db = require("../db")

router.post("/gifts", (req, res, next) => {
  const gift = req.body.gift
  const gift_recipient = req.body.gift_recipient
  const relationship_to_user = req.body.relationship_to_user
  const alternate_gift_recipient = req.body.alternate_gift_recipient

  const user_id = req.body.user_id

  console.log(req.body)

  const sql = `INSERT INTO Gifts (user_id,gift,gift_recipient ,relationship_to_user, alternate_gift_recipient)
VALUES (?,?,?,?,?)`

  db.query(
    sql,
    [
      user_id,
      gift,
      gift_recipient,
      relationship_to_user,
      alternate_gift_recipient
    ],
    (err, results, fields) => {
      res.json({
        messaage: "Completed Gifts",
        results
      })
    }
  )
})

router.get("/giftsRouter", (req, res, next) => {
  axios.get("/gifts").then(resp => {
    const user = resp.data.results[0]
  })
})

module.exports = router
