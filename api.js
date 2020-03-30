const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 5000;

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "SuperSaiyan11!",
    database: "anime"
});

app.use(cors())

app.get('/allAnime', (req, res) => {
    const query = "SELECT * FROM ANIME";
    db.query(query, (err, rows) => {
        if (err) throw err;
        res.send(rows)
    });
});

app.get('/deleteAnime/:id', (req, res) => {
        const query = `DELETE FROM Anime WHERE uid = ${req.params.id}`
        db.query(query, (err, rows) => {
                if (err) throw err;
                res.send(rows)
        })
})

app.listen(port, () => console.log(`The REST API is listening through port ${port}.`));