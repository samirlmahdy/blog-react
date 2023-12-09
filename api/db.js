import mysql from 'mysql'

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "lamadev123",
    database: "blog"
})

