const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

const posts = [
    {
        title: "Ciambellone",
        content: "Un soffice e profumato ciambellone fatto in casa, perfetto per la colazione o la merenda",
        image: "/images/ciambellone.jpeg",
        tags: [
            "dolce", "colazione", "fatto in casa"
        ]
    },
    {
        title: "Cracker Barbabietola",
        content: "Cracker croccanti e colorati alla barbabietola, ideali per un aperitivo salutare",
        image: "/images/cracker_barbabietola.jpeg",
        tags: [
            "salato", "snack", "barbabietola", "salutare"
        ]
    },
    {
        title: "Pane Fritto Dolce",
        content: "Fette di pane fritto dorate e spolverate di zucchero, una golosità della tradizione",
        image: "/images/pane_fritto_dolce.jpeg",
        tags: [
            "dolce", "fritto", "tradizionale"
        ]
    },
    {
        title: "Pasta Barbabietola",
        content: "Pasta fresca colorata naturalmente con barbabietola, dal sapore delicato e dall'aspetto accattivante",
        image: "/images/pasta_barbabietola.jpeg",
        tags: [
            "primo piatto", "pasta fresca", "barbabietola", "colorata"
        ]
    },
    {
        title: "Torta Paesana",
        content: "La tradizionale torta paesana lombarda con pane raffermo, cacao e uvetta",
        image: "/images/torta_paesana.jpeg",
        tags: [
            "dolce", "tradizionale", "lombarda", "ricetta della nonna"
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