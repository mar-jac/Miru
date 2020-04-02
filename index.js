const Papa = require("papaparse");
const fs = require('fs');

const animeCSVPath = './csv/anime.csv';
const animeFile = fs.readFileSync(animeCSVPath, "utf8");

const rows = {}
Papa.parse(animeFile, {

    header: true,
    skipEmptyLines: true,
    complete: function(results) {
        rows.data = results.data;
        rows.errors = results.errors;
        rows.meta = results.meta;

    }
});

const aniArray = rows.data.map(section => {

    const { uid, title, episodes, popularity, ranked, score, members} = section;
    const fixedName = title.replace(/,/g, ' ') // removes extra commas from names

    return { uid, fixedName, episodes, popularity, ranked, score, members}
});

const aniData = Papa.unparse(aniArray);
createAnimeFile('./csv/aniTable.csv', aniData, "The anime table has been successfully made. Congrats senpai!");

function createAnimeFile(filePath, data, msg) {
    fs.writeFile(filePath, data, err => {
        if (err) throw err;
        console.log(msg);
    });
};

//console.log(rows.data);