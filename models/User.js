const mongoose = require('mongoose')

// Model - database 개념, Schema를 감싸줌
// Schema - table 개면, 데이터를 key : value로 가지고 있음

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //빈칸 없애주는 옵션
        unique: 1
    },
    password: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String, // 객체 형태가 아니어도 됨
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {} // User 객체를 다른 곳에서도 사용 가능하도록 허용하는 코드
