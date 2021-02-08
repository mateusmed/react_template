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
server.use(express.json());



// server.use(bodyParser.urlencoded({extended: true}));


server.listen(8080, () => {
 console.log("Server running on port 8080");
});


server.get("/item", (req,
                     res) => {

    let content = db.list();
    console.log(content);

    res.json(content);
});


server.post("/item", (req,
                                   res) => {

    let item = req.body;
    db.saveOrUpdate(item)

    res.json(item);
});




server.post('/upload', async (req,
                                                  res) => {

    console.log("---> upload-avatar");

    try {
        if(!req.files) {

            console.log("---> arquivo NÃO recebido");

            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {

            console.log("---> arquivo recebido");

            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let myFile = req.files.myFile;

            console.log(myFile);

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            myFile.mv('./uploads/' + myFile.name);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: myFile.name,
                    mimetype: myFile.mimetype,
                    size: myFile.size
                }
            });
        }
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
});