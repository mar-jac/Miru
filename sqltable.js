const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "SuperSaiyan11!",
    database: "anime"
});

let qy; 

function cuteQuery(qy, msg) {
    db.query(qy, err => {
        if (err) throw err;
        console.log(msg);
    });
};

db.connect(err => {
    if (err) throw err;
    console.log("Connected senpai!");

    qy = "DROP TABLE IF EXISTS ANIME";
    cuteQuery(qy, "Anime table dropped.");

    qy = "CREATE TABLE ANIME (row_id INT AUTO_INCREMENT PRIMARY KEY, uid INT, name VARCHAR(255), "
        + "episodes INT, popularity INT, ranked INT, score DECIMAL(3,2), members INT)";
    cuteQuery(qy, "Table has been made.");

    qy = "LOAD DATA LOCAL INFILE 'csv/aniTable.csv' INTO TABLE ANIME FIELDS TERMINATED BY ',' IGNORE 1 LINES "
        + "( uid, name, episodes, popularity, ranked, score, members)";
    cuteQuery(qy, "Table has been loaded to the database!")

    db.end(err => {
        if (err) throw err;
        console.log("All done. Closing the database!");
    });

});






