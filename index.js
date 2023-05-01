const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors')
const bodyParser = require('body-parser');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "react_form"
})

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json())
app.use(cors())

app.get('/api/view', (req, res) => {
    const sqlView = "SELECT * FROM customers"
    db.query(sqlView, (err, result) => {
        res.send(result)
    })
})

app.post('/api/insert', (req, res) => {

    const fname = req.body.Fname;
    const uname = req.body.Uname;
    const mail = req.body.Mail;
    const pnum = req.body.Pnum;
    const pass = req.body.Pass;
    const gendr = req.body.Gender;

    const sqlInsert = "INSERT INTO customers (fullname, username, email, phone_number, password, gender) VALUES (?,?,?,?,?,?);"
    db.query(sqlInsert, [fname, uname, mail, pnum, pass, gendr], (err, result) => {
       console.log(err);
    })
})

app.post('/api/delete', (req, res) => {
    const cID = req.body.cID

    const sqlDel = "DELETE FROM customers WHERE id=?"
    db.query(sqlDel, [cID], (err, result) => {
        console.log("1 Record Deleted by ID")
    })
})

app.post('/api/update', (req, res) => {
    const colData1 = req.body.colData1
    const colData2 = req.body.colData2
    const colData3 = req.body.colData3
    const uID = req.body.uID

    const sqlUpdate = "UPDATE customers SET fullname = ?, username = ?, gender = ? WHERE id = ?";
    db.query(sqlUpdate, [colData1, colData2, colData3, uID], (err, result) => {
        console.log(err)
    })
})


//DEBUG CONNECTION
db.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});

app.get('/', (req, res) => {
    res.send("Connection Clean")
})

app.listen(3001, () => {
    console.log("Connection Success")
});