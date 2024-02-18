const express = require('express');
const http = require('http');
const PORT = 3000

app = express()
server = http.createServer(app);

app.get('/login', function (req, res) {
  res.send("로그인 화면에 도달했습니다")
});

server.listen(PORT, function () {
  console.log('Express server listening on port ' + PORT);
});