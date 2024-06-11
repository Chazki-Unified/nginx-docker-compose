const express = require('express');
const app = express();
const port = 8181;


const parseIp = (req) =>
    req.headers['x-forwarded-for']?.split(',').shift()
    || req.socket?.remoteAddress

app.get('/', (req, res) => {
  let ipadddr = req.socket.remoteAddress
  res.send({message: parseIp(req)})
});

app.get('/summary', (req, res) => {
  res.send({
    source: 'https://en.wikipedia.org/wiki/HTTP',
    summary: `Lore ipsum`
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
