const net =require('net');

let client = net.connect({port:9999, host:'localhost'}, () => {
    console.log('서버와 연결되었습니다.');
});

//호스트 자리에 아무것도 안너주면 localhost로간다.
//클라이언팅
//node (이름).js

//host : 'localhost'

/*
const fs =require('fs');
fs.watch('./', (event, filename) => {
    console.log(`event type is : ${event}`);
    if(filename)console.log(`filename provided : ${filename}`);
    else console.log(` filename do not provided`);
})
*/



/*
const fs = require("fs");
let data = fs.readFile('vscode.js', 'utf-8', (err,data) => {
    console.log(data.split("").reverse().join(""));
});
//동기 Syncronous 다른 작업이 이게 끝날 때 까지 다른 프로그램이 작동하지 않음
//비동기 sync가 없음
//split 배열로 만들어준다
//reverse 배열에만 사용가능 문자열을 거꾸로 만들어준다.
*/