const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

const posts = [
    {
        title: "Ciambellone",
        content: "Un bellissimo ciambellone caldo",
        image: "/images/ciambellone.jpeg",
        tags: [
            "buono", "grasso"
        ]
    },
    {
        title: "Cracker Barbabiet",
        content: "Un bellissimo ciambellone caldo",
        image: "/images/ciambellone.jpeg",
        tags: [
            "buono", "grasso"
        ]
    },
    {
        title: "Ciambellone",
        content: "Un bellissimo ciambellone caldo",
        image: "/images/ciambellone.jpeg",
        tags: [
            "buono", "grasso"
        ]
    },
    {
        title: "Ciambellone",
        content: "Un bellissimo ciambellone caldo",
        image: "/images/ciambellone.jpeg",
        tags: [
            "buono", "grasso"
        ]
    }
]

app.get("/", (req, res) => {

    res.send("Server del mio blog");
})

app.get("/bacheca", (req, res) => {

    const html = posts.map(post =>
        `
        <h1>${post.title}</h1>
        <img src=${post.image} alt=${post.title}>
        <p>${post.content}</p>
        <div> 
        
        ${post.tags.map(tag =>
            `
        <span>${tag}</span>
        `).join("")}
        </div>
        `
    ).join("");

    res.send(html)
})

app.listen(port, () => {
    console.log(`This app is listening on ${port}`);
})