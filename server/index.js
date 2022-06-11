const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "$#An4488",
    database: "arc_dbms"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insert", (req, res) => {
    const rEmail = req.body.rEmail;
    const rPassword = req.body.rPassword;
    console.log(rEmail);
    console.log(rPassword);

    const Sqlinsert = "INSERT INTO Registration (Email, Password) VALUES (?,?)";
    db.query(Sqlinsert, [rEmail, rPassword], (err,result) => {
        console.log(result);
    });
});

app.listen(3001, () => {
    console.log("Running on server port 3001");
});