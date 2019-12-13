const router = require("express").Router()
const db = require("../db")

router.post("/user_info", (req, res, next) => {
  const id = req.body.id
  const full_name = req.body.fullName
  const city = req.body.cityName
  const county = req.body.countyName
  const state = req.body.stateName
  const email = req.body.email
  const mobile_number = req.body.mobile_number
  const marital_status = req.body.marital_status
  const children = req.body.children
  const home = req.body.home
  const pets = req.body.pets
  console.log(req.body)

  console.log("hello")

  const sql = `
  INSERT INTO user_info (user_id, full_name, city, county, state, email, mobile_number, marital_status, children, home, pets) 
  VALUES (?,?,?,?,?,?,?,?,?,?,?) `

  db.query(
    sql,
    [
      id,
      full_name,
      city,
      county,
      state,
      email,
      mobile_number,
      marital_status,
      children,
      home,
      pets
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

router.get("/users/id/:userName", (req, res, next) => {
  const username = req.params.userName
  const getsql = `SELECT id FROM users WHERE username =?`
  db.query(getsql, [username], (err, results, fields) => {
    res.json(results[0])
  })
})

router.get("/", (req, res, next) => {
  // axios.get("/user_info").then(resp => {
  // const user = resp.data.results[0]
  // })

  const getsql = `SELECT full_name, city, county, state, email
    FROM user_info`

  db.query(getsql, (err, results, fields) => {
    // let names = results.map(info => user_info
    res.json(results)
  })
})

// router.get("/guardianRouter", (req, res, next) => {
//   axios.get("/care_taker").then(resp => {
//     const user = resp.data.results[0]
//   })

module.exports = router
