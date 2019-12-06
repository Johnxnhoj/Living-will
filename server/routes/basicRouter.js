const router = require("express").Router()
const db = require("../db")

router.post("/", (req, res, next) => {
  const full_name = req.body.full_name
  const city = req.body.city
  const county = req.body.county
  const state = req.body.state
  const email = req.body.email
  const mobile_number = req.body.mobile_number
  const marital_status = req.body.marital_status
  const children = req.body.children
  const home = req.body.home
  const pet = req.body.pet

  const sql = `INSERT INTO user_info (full_name, city, county, state, email, mobile_number, marital_status, children, home, pet) VALUES (?,?,?,?,?,?,?,?,?,?) `

  db.query(
    sql,
    [
      full_name,
      city,
      county,
      state,
      email,
      mobile_number,
      marital_status,
      children,
      home,
      pet
    ],
    (err, results, fields) => {
      if (err) {
        throw new Error(err)
      } else {
        res.json({
          message: "Completed Basic Info",
          results
        })
      }
    }
  )
})

router.get("/", (req, res, next) => {
  const getsql = `SELECT full_name, city, county, state, email 
  FROM user_info`

  db.query(getsql, (err, results, fields) => {
    res.json(results)
  })
})

// router.post("/will", (req,res,next)=>{
//   const FullName = req.body.FullName
//   const City = req.body.City
//   const County = req.body.County
//   const State = req.body.State
//   const Email = req.body.Email

//   db.query("SELECT FullName")
// })

module.exports = router
