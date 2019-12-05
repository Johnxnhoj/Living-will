const router = require("express").Router()
const db = require("../db")

router.post("/user_info", (req, res, next) => {
  const FullName = req.body.FullName
  const City = req.body.City
  const County = req.body.County
  const State = req.body.State
  const Email = req.body.Email

  const getsql = `INSERT INTO user_info (FullName, City, County, State,Email) VALUES (?,?,?,?,?) `

  db.query(
    sql,
    [FullName, City, County, State, Email],
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

// router.post("/will", (req,res,next)=>{
//   const FullName = req.body.FullName
//   const City = req.body.City
//   const County = req.body.County
//   const State = req.body.State
//   const Email = req.body.Email

//   db.query("SELECT FullName")
// })

module.exports = router
