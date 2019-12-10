const createError = require("http-errors")
const express = require("express")
const userRouter = require("./routes/userRouter")
const app = express()
const guardianRouter = require("./routes/guardianRouter")
const estateRouter = require("./routes/estateRouter")
const giftsRouter = require("./routes/giftsRouter")
const basicRouter = require("./routes/basicRouter")
const thoughtsRouter = require("./routes/thoughtsRouter")
const witnessRouter = require("./routes/witnessRouter")
const executorRouter = require("./routes/executorRouter")

const protectedRouter = require("./routes/protectedRouter")

const jwt = require("express-jwt")
// const server = require("http").Server(app)
// const io = require("socket.io")(server)
const config = require("config")
// require("./Chat")(io)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/users", userRouter)
app.use("/", jwt({ secret: config.get("secret") }), protectedRouter)

app.use("/users", userRouter)
app.use("/user_info", basicRouter)
app.use("/care_taker", guardianRouter)
app.use("/estate", estateRouter)
app.use("/thoughts", thoughtsRouter)
app.use("/gifts", giftsRouter)

app.use("/witness", witnessRouter)

app.use("/executor", executorRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json({
    status: err.status,
    error: err
  })
})

app.listen(8080, () => {
  console.log("Listening on port 8080")
})
