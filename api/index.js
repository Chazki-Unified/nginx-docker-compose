const express = require('express');
const app = express();
const port = 8181;

app.get('/', (req, res) => {
  let ipadddr = req.socket.remoteAddress
  res.send({message: ipadddr})
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
