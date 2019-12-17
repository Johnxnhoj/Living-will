const router = require("express").Router()
const db = require("../db")

router.post("/gifts", (req, res, next) => {
  const user_id = req.body.user_Id
  const gift = req.body.gift
  const gift_recipient = req.body.gift_recipient
  const relationship_to_user = req.body.relationship_to_user
  const alternate_gift_recipient = req.body.alternate_gift_recipient

  console.log(req.body)

  const sql = `INSERT INTO Gifts (user_id, gift, gift_recipient, relationship_to_user, alternate_gift_recipient)
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

router.get("/Gifts/:user_id", (req, res, next) => {
  const userId = req.params.user_id
  const getsql = `SELECT user_id, gift, gift_recipient, relationship_to_user, alternate_gift_recipient
    FROM Gifts WHERE user_id =?`

  db.query(getsql, [userId], (err, results, fields) => {
    res.json(results)
  })
})

module.exports = router
