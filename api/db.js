import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "blog",
})

db.connect((err) => {
    if (err) console.log(err)
    else console.log("connected to db")
})

