// const router = require("express").Router()
// const db = require("../db")

// router.get("/", (req, res, next) => {
//   const bene = req.params.bene

//   const sql = `
//   SELECT *
//   FROM estate `

//   db.query(sql, [bene], (err, results, fields) => {
//     res.json(results)
//   })
// })

// // router.get("/single/:postId", (req, res, next) => {
// //   const postId = req.params.postId

// //   const sql = `SELECT * FROM posts WHERE id =?`

// //   db.query(sql, [postId], (err, results, fields) => {
// //     res.json(results)
// //   })
// // })
// router.post("/", (req, res, next) => {
//   const Beni_name = req.body.Beni_name
//   const Address = req.body.Address
//   const Property = req.body.Property
//   const Type_of = req.body.Type_of

//   // const getsql = `
//   // SELECT id FROM categories WHERE slug=?`

//   const sql = `
//   INSERT INTO estate (Beni_name,Address,Property,Type_of)
//   VALUES (?,?,?,?)`

//   // db.query(getsql, [slug], (err, results, fields) => {
//   //   const catId = results[0].id

//   db.query(
//     sql[(Beni_name, Address, Property, Type_of)],
//     (err, results, fields) => {
//       if (err) {
//         throw new Error("WHOOPS")
//       } else {
//         res.json(results)
//       }
//     }
//   )
// })
const router = require("express").Router()
// const axios = require("axios")
const db = require("../db")

const guard = []

const people = {}

router.get("/estateRouter", (req, res, next) => {
  axios.get("/estate").then(resp => {
    const user = resp.data.results[0]
  })
})

router.post("/estate", (req, res, next) => {
  const user_id = req.body.user_id
  const namebeni = req.body.namebeni
  const addressbeni = req.body.addressbeni
  const relationbeni = req.body.relationbeni
  const typebeni = req.body.typebeni
  const property = req.body.property
  console.log(user_id, namebeni, addressbeni, relationbeni, typebeni, property)
  //console.log(req.body)

  // const user_id = id
  const sql = `INSERT INTO estate (user_id, beni_name, address, property, type_of)
   VALUES(?, ?, ?, ?, ?)`

  db.query(
    sql,
    [user_id, namebeni, addressbeni, property, typebeni],
    (err, results, fields) => {
      console.log(err)
      res.json({
        message: "added asset full name",
        results
      })
    }
  )
})
module.exports = router
