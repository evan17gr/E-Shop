const bcrypt = require("bcryptjs");

const users = [
    {
        name:"Admin User",
        email:"admin@example.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin:true
    },
    {
        name:"Kathleen O'Brien",
        email:"kathleen@example.com",
        password:bcrypt.hashSync("123456",10)
    },
    {
        name:"Panagiotis Kalvis",
        email:"panagiotis@example.com",
        password:bcrypt.hashSync("123456",10)
    }
];

module.exports = users;