import express from 'express'
const app = express()

const LoggerMiddleware = (req, res, next) => {
  console.log(`Logged ${req.url} ${req.method} -- ${new Date()}`)
  next()
}

// Application Level Middleware
app.use(LoggerMiddleware)

app.get('/users', (req, res) => {
  res.json({
    status: true
  })
})

app.post('/save', (req, res) => {
  res.json({
    status: true
  })
})

app.listen(3007, (req, res) => {
  console.log('server running on port 3007')
})
