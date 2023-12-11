import { db } from '../db.js'
import bcrypt from 'bcryptjs'




export const register = (req, res) => {

    //CHECK EXISTING USER

    const q = "SELECT * FROM users WHERE email = ? OR username = ?"
    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.status(500).json(err)
        if (data.length) return res.status(409).json('User already exists!')

        //Hash the password and create a user
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        // CREATE USER AND SAVE IN DB
        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
        const values = [req.body.username, req.body.email, hashedPassword]



        db.query(q, [values], (err, data) => {
            if (err) return res.json(err)
            return res.status(201).json("User has been created!")
        })
    })

}

export const login = (req, res) => {
    //CHECK EXISTING USER

    const q = "SELECT * FROM users WHERE username = ?"
    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err)
        if (data.length === 0) return res.status(404).json("User not found!")

        //CHECK PASSWORD

        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password, data[0].password
        )

        if (!isPasswordCorrect) return res.status(400).json("Wrong username or password!")


    })

}


export const logout = (req, res) => {

}