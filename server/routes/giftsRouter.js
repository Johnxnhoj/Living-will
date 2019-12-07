const router = require("express").Router()
const db = require("../db")

router.post("/gifts", (req, res, next) => {
  const user_id = req.body.user_id
  const gift = req.body.gifts
  const gift_recipient = req.body.gift_recipient
  const relationship_to_user = req.body.relationship_to_user
  const alternate_gift_recipient = req.body.relationship_to_user

  console.log(req.body)

  const sql = `INSERT INTO Gifts (user_id,gift,gift_recipient ,reationship_to_user, alternate_gift_recipient)
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
      if (err) {
        throw new Error(err)
      } else {
        res.json({
          messaage: "Completed Gifts",
          results
        })
      }
    }
  )
})

router.get("/giftRouter", (req, res, next) => {
  axios.get("/gifts").then(resp => {
    const user = resp.data.results[0]
  })
})

module.exports = router
