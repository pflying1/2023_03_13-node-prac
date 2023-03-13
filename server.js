const mainPage = require('./module/html.js');
console.log(mainPage);

const http = require('http');

//sever는 http 를 쓰고 서버에 함수를 써줘야한다. 또한 매개변수 request,response는 조건이다.
const server = http.createServer(function(request,response){
  response.statusCode = 200;
  response.setHeader('Content-Type','text/html');
  response.end(mainPage);
});

server.listen(2080, function(error) {
  if(error) {
    console.error('서버 안돌아간다.');

  }else{
    console.log('서버 돌아간다.')
  }
});

