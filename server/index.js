const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()
const mysql = require("mysql")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "WHO5DataBase"

})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));


// ------------- get questionnaire --------------
app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM who5";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log('err', err)
        } else{
            console.log('------------', result)
            res.send(result)
        }
    })
})


// ------------- submit questionnaire --------------
app.post("/api/insert", (req, res) => {
    
    const status = req.body.status
    const q1 = req.body.q1
    const q2 = req.body.q2
    const q3 = req.body.q3
    const q4 = req.body.q4
    const q5 = req.body.q5

    const sqlInsert = "INSERT INTO who5 (status, q1, q2, q3, q4, q5) VALUES (?,?,?,?,?,?)"
    db.query(sqlInsert, [status, q1, q2, q3, q4, q5], (err, result) => {
        if (err) {
            console.log('err', err)
        } else {
            console.log('---------------------', res)
            console.log('*********************', result)
            res.status(200).send("registration successful");
        }
    })
})

app.listen(3001,() => {
    console.log('running on port 3001')
})

