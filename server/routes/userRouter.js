const router = require("express").Router()
const db = require("../db")

const users = [
  { id: 1, name: "Mike" },
  { id: 2, name: "Ryan" }
]

router.get("/", (req, res, next) => {
  res.json()
})

module.exports = router
