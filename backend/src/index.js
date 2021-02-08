import express from "express";

import fileUpload from 'express-fileupload';
import cors from 'cors';


import DatabaseService from "./database/service.js"




const db = new DatabaseService();
const server = express();


server.use(fileUpload({
    createParentPath: true
}));

server.use(cors());
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({extended: true}));


server.listen(8080, () => {
 console.log("Server running on port 8080");
});


server.get("/item", (req,res) => {
    let content = db.list();
    console.log(content);

    res.json(content);
});


server.post("/item", (req,res) => {

  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});




server.post('/upload-avatar', async (req,
                                                  res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let avatar = req.files.avatar;

            console.log(avatar);

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            avatar.mv('./uploads/' + avatar.name);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
});