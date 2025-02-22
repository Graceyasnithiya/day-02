const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = 4000;

const app = express();

const outputFolder = './output';

if(!fs.existsSync(outputFolder)){
    fs.mkdirSync(outputFolder)
}

app.get('/createFile', (req,res)=>{
    const currentTime = new Date();

    const year = currentTime.getFullYear().toString();
    const month = (currentTime.getMonth() +1).toString();
    const date = currentTime.getDate().toString();
    const hours = currentTime.getHours().toString();
    const minutes = currentTime.getMinutes().toString();
    const sec = currentTime.getSeconds().toString();
    

    const dateTimeForFileName = `${year}-${month}-${date}-${hours}-${minutes}-${sec}.txt`;

    const filePath = path.join(outputFolder, dateTimeForFileName);

    fs.writeFile(filePath, currentTime.toISOString(), (err)=>{
      
        if(err){
           res.status(500).send(`Error creating file : $(err)`);
           return; 
        }
        res.send(`File created successfully at : ${filePath}`)
    })
})

app.get('/getFiles', (req,res)=>{
    
    fs.readdir(outputFolder, (err, files)=>{
      if(err){
        res.send(`error creating directory: ${err}`)
        return;
      }
      const textFiles = files.filter((file)=>path.extname(file) === ".txt");

      res.json(textFiles);
      
    })
})
app.listen(PORT, ()=>{
    console.log("server is running on the port", PORT);
})