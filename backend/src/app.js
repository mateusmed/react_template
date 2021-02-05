import express from "express";

import DatabaseService from "./database/service.js"

const db = new DatabaseService();
const app = express();

app.listen(8080, () => {
 console.log("Server running on port 8080");
});



app.get("/item", (req,res) => {
    let content = db.list();
    console.log(content);

    res.json(content);
});


app.post("/item", (req,res) => {

  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});