import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;
let names = []
let dess = []

// Assuming your static files are in a directory named "public"
app.use(express.static('assets'));

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`App is litening to port ${PORT}`);
});

app.get("/", (req, res) => {
    res.render("index.ejs", { Names: names, Descriptions: dess});
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
});



app.post("/submit", (req,res) => {
    const Uname = req.body.Uname
    const Desc = req.body.Desc
    names.push(Uname)
    dess.push(Desc)
    res.redirect("/")
})
