const router = require("express").Router()
const db = require("../db")

router.get("/", (req, res, next) => {
  const bene = req.params.bene

  const sql = `
  SELECT * 
  FROM estate `

  db.query(sql, [bene], (err, results, fields) => {
    res.json(results)
  })
})

// router.get("/single/:postId", (req, res, next) => {
//   const postId = req.params.postId

//   const sql = `SELECT * FROM posts WHERE id =?`

//   db.query(sql, [postId], (err, results, fields) => {
//     res.json(results)
//   })
// })
router.post("/", (req, res, next) => {
  const Beni_name = req.body.Beni_name
  const Address = req.body.Address
  const Property = req.body.Property
  const Type_of = req.body.Type_of

  // const getsql = `
  // SELECT id FROM categories WHERE slug=?`

  const sql = `
  INSERT INTO estate (Beni_name,Address,Property,Type_of)
  VALUES (?,?,?,?)`

  // db.query(getsql, [slug], (err, results, fields) => {
  //   const catId = results[0].id

  db.query(
    sql[(Beni_name, Address, Property, Type_of)],
    (err, results, fields) => {
      if (err) {
        throw new Error("WHOOPS")
      } else {
        res.json(results)
      }
    }
  )
})

module.exports = router
