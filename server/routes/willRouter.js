const router = require("express").Router()
const axios = require("axios")
const db = require("../db")

// ///Guadian Get
// const guard = []

// const people = {}

// router.get("/guardianRouter", (req, res, next) => {
//   axios.get("/care_taker").then(resp => {
//     const user = resp.data.results[0]
//   })
// })

// ///Witness
// router.get("/witnessRouter", (req, res, next) => {
//   axios.get("/witness").then(resp => {
//     const user = resp.data.results[0]
//   })
// })

// //Thoughts
// router.get("/thoughtsRoutes", (req, res, next) => {
//   const getsql = `SELECT user_thoughts
//   FROM Thoughts`

//   db.query(getsql, (err, results, fields) => {
//     res.json(results)
//   })
// })

// //Gifts
// router.get("/giftsRouter", (req, res, next) => {
//   axios.get("/gifts").then(resp => {
//     const user = resp.data.results[0]
//   })
// })

// ///Executor
// router.get("/executorRoutes", (req, res, next) => {
//   const getsql = `SELECT id, user_id, full_name, city, county, state
//   FROM executor`

//   db.query(getsql, (err, results, fields) => {
//     res.json(results)
//   })
// })
// ///Estate

// const guard = []

// const people = {}

// router.get("/estateRouter", (req, res, next) => {
//   axios.get("/estate").then(resp => {
//     const user = resp.data.results[0]
//   })
// })
//BasicInfo

router.get("/basicRouter", (req, res, next) => {
  axios.get("/user_info").then(resp => {
    const user = resp.data.results[0]
  })
})
