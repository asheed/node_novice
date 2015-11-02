/**
 * Created by woojin on 2015-11-02.
 */
var http = require('http');
var express = require('express');

// 서버 생성
var app = express();

// request 이벤트 리스너 설정
app.use(function (request, response) {
    // user-agent 속성 추출
    var agent = request.header('User-Agent');

    //console.log(request.headers);
    console.log(agent);

    // 데이터 생성
    /*var output = [];
    for (var i = 0; i < 3; i++) {
        output.push({
            count: i,
            name: 'name-'+i
        })
    } */

    // 브라우저 확인
    if (agent.toLowerCase().match(/chrome/)) {
        // 페이지 출력
        response.send('<h1>Hello Chrome .. !</h1>');
    } else if (agent.toLowerCase().match(/firefox/)) {
        response.send('<h1>Hello FireFox .. !</h1>');
    } else {
        response.send('<h1>Hello Express ..!</h1>');
    }

    // 응답
    //response.sendStatus(200);
    /*response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Hello express!</h1>');*/
});

// 서버실행
http.createServer(app).listen(52273, function () {
    console.log('서버가 시작되었습니다. http://127.0.0.1:52273');
});
