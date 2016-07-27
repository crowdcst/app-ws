const app = require('express')()
const port = process.env.PORT || 3101

app.use(require('express').static(__dirname + "/client"))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html')
})

app.get('*', (req, res) => {
  res.redirect('/')
})

app.listen(port)
console.log('Server running at http://127.0.0.1:%s', port)
module.exports = app
