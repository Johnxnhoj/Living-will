const router = require("express").Router()
// const axios = require("axios")
const db = require("../db")

router.post("/CareTaker", (req, res, next) => {
  const user_id = req.body.input.user_Id
  const childName = req.body.input.childname
  const guardianName = req.body.input.guardianName
  const altGuardianName = req.body.input.altGuardianName
  const extraGuardianName = req.body.input.extraGuardianName

  // console.log(req.body)

  // const sql = `
  // INSERT INTO CareTaker (user_id, child_name, Guardian_Name, alt_Guardian_Name, extra_Guardian_Name)

  //  VALUES(?, ?, ?, ?, ?)`

  // db.query(
  //   sql,
  //   [user_id, childName, guardianName, altGuardianName, extraGuardianName],
  //   (err, results, fields) => {
  //     console.log(err)
  //     res.json({
  //       message: "added child full name",
  //       results
  //     })
  //   }
  // )
  const sql3 = `SELECT * FROM Caretaker WHERE user_id = ?`

  db.query(sql3, [user_id], (err, results, fields) => {
    if (results.length > 0) {
      const sql1 = `UPDATE Caretaker SET child_name = ?, Guardian_Name = ?, alt_Guardian_Name = ?, extra_Guardian_Name = ? WHERE user_id = ?`
      db.query(
        sql1,
        [childName, guardianName, altGuardianName, extraGuardianName, user_id],
        (err, results, fields) => {
          if (err) {
            console.log(err)
          }
          res.json(results)
        }
      )
    } else {
      console.log(results)
      const sql2 = `INSERT INTO Caretaker (user_id, child_name, Guardian_Name, alt_Guardian_Name, extra_Guardian_Name)
      VALUES(?, ?, ?, ?,?)`

      db.query(
        sql2,
        [user_id, childName, guardianName, altGuardianName, extraGuardianName],
        (err, results, fields) => {
          console.log(err)
          res.json({
            message: "added care full name",
            results
          })
        }
      )
    }
  })
})
// router.patch("/CareTaker"),()={

//   const sql3 = `SELECT * FROM Caretaker WHERE user_id = ?`

//   db.query(sql3, [user_id], (err, results, fields) => {
//     if (results.length > 0) {
//       const sql1 = `UPDATE Caretaker SET child_name = ?, Guardian_Name = ?, alt_Guardian_Name = ?, extra_Guardian_Name = ? WHERE user_id = ?`
//       db.query(
//         sql1,
//         [childName, guardianName, altGuardianName, extraGuardianName, user_id],
//         (err, results, fields) => {
//           if (err) {
//             console.log(err)
//           }
//           res.json(results)
//         }
//       )
//     }
//     } else {
//       console.log(results)
//       const sql2 = `INSERT INTO Caretaker ( child_name, Guardian_Name, alt_Guardian_Name, extra_Guardian_Name)
//       VALUES(?, ?, ?, ?, ?)`

//       db.query(
//         sql2,
//         [childName, guardianName, altGuardianName, extraGuardianName],
//         (err, results, fields) => {
//           console.log(err)
//           res.json({
//             message: "added care full name",
//             results
//           })
//         }
//       )
//     }
// }
//   )}

router.get("/CareTaker/:user_id", (req, res, next) => {
  const userId = req.params.user_id
  // const user = resp.data.results[0]
  const getsql = `SELECT user_id, child_name, Guardian_Name, alt_Guardian_Name, extra_Guardian_Name 
  FROM CareTaker WHERE user_id = ?`

  db.query(getsql, [userId], (err, results, fields) => {
    res.json(results)
  })
})

module.exports = router
