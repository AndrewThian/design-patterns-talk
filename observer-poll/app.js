const express = require('express')
const app = express()
const sse = require('./sse')
const Iterator = require('./iterator')

const connections = [];
const votes = { yes: 0, no: 0 }

app.set('view engine', 'pug')

app.use(sse)

app.get('/', function(req, res) {
  res.render('vote')
})

app.get('/result', function(req, res) {
  res.render('result')
})

app.get('/vote', function(req, res) {
  if (req.query.yes === "true") votes.yes++
  else votes.no++

  const iterator = new Iterator(connections);
  iterator.each(connection => {
    connection.value.sseSend(votes)
  })

  res.sendStatus(200)
})

app.get('/stream', function(req, res) {
  res.sseSetup()
  res.sseSend(votes)
  connections.push(res)
})

app.listen(3000, function () {
  console.log('listening')
})