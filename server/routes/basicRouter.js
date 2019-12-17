const router = require("express").Router()
const db = require("../db")

router.post("/user_info", (req, res, next) => {
  const user_id = req.body.user_Id
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

  //   const sql = `
  //   INSERT INTO user_info (user_id, full_name, city, county, state, email, mobile_number, marital_status, children, home, pets)
  //   VALUES (?,?,?,?,?,?,?,?,?,?,?) `

  //   db.query(
  //     sql,
  //     [
  //       user_id,
  //       full_name,
  //       city,
  //       county,
  //       state,
  //       email,
  //       mobile_number,
  //       marital_status,
  //       children,
  //       home,
  //       pets
  //     ],
  //     (err, results, fields) => {
  //       if (err) {
  //         throw new Error(err)
  //       } else {
  //         res.json({
  //           message: "Completed Basic Info",
  //           results
  //         })
  //       }
  //     }
  //   )
  // })
  const sql3 = `SELECT * FROM user_info WHERE user_id = ?`

  db.query(sql3, [user_id], (err, results, fields) => {
    if (results.length > 0) {
      const sql1 = `UPDATE user_info SET full_name = ?, City = ?, County = ?, State = ?, Email = ?, mobile_number = ?, marital_status = ?, children = ?, home = ?, pets = ? WHERE user_id = ?`
      db.query(
        sql1,
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
          pets,
          user_id
        ],
        (err, results, fields) => {
          if (err) {
            console.log(err)
          }
          res.json(results)
        }
      )
    } else {
      console.log(replacing)
      const sql2 = `INSERT INTO user_info (user_id, full_name, City, County, State, Email, mobile_number, marital_status, childern, home, pets)
      VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

      db.query(
        sql2,
        [
          user_id,
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
          console.log(err)
          res.json({
            message: "added basic info full name",
            results
          })
        }
      )
    }
  })
})

router.get("/user_info/:user_id", (req, res, next) => {
  const userId = req.params.user_id

  const getsql = `SELECT full_name, city, county, state, email
    FROM user_info WHERE user_id = ?`

  db.query(getsql, [userId], (err, results, fields) => {
    // let names = results.map(info => user_info
    res.json(results)
  })
})

// router.get("/guardianRouter", (req, res, next) => {
//   axios.get("/care_taker").then(resp => {
//     const user = resp.data.results[0]
//   })

module.exports = router
