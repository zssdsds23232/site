import express, { response } from "express";
import fs from "fs";


const app = express();

app.use(express.static("./static"));
app.get("/", (req, res) => {
    try {
        const page = fs.readFileSync("./index.html");
        res.send(page.toString());
    } catch (err) {
        console.log(err.message);
        res.sendStatus(400);
    }
});

app.listen(80, (err) => {
    if(err) console.log(err.message);
    else console.log("start");
});