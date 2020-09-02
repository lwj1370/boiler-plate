const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://test:test@cluster0-ngxmt.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true
    }).then(() => console.log("MongoDB Connected")).catch(err => console.log(err));
//mongodb+srv://lwj1370:<password>@cluster0-ngxmt.mongodb.net/<dbname>?retryWrites=true&w=majority
app.get('/', (req, res) => {
    res.send('Hello World! 권령아 사랑해!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//git 시작
/*
* 1. git init
* git 빈 공간이 만들어짐
*
* 2. git status
* 현재 git 저장소에 들어갈 파일들
*
* 3. git rm --cached 파일 혹은 폴더명 -r
* git add로 추가된 내용을 삭제
*
* 4. git add
* 디렉토리 하위의 모든 파일을 commit 준비 시킴
*
* */