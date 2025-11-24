const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

const posts = [
    {
        title: "Ciambellone",
        content: "Un bellissimo ciambellone caldo",
        image: "images/ciambellone.jpeg",
        tags: [
            "buono", "grasso"
        ]
    }
]

app.get("/", (req, res) => {

    res.send("Server del mio blog");
})

app.get("/bacheca", (req, res) => {

    res.send(`<img src="/images/ciambellone.jpeg">`);
})

app.listen(port, () => {
    console.log(`This app is listening on ${port}`);
})