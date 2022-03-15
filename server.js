const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
var saveData = [];

     score = fs.readFileSync('highscores.json');
     saveData = JSON.parse(score);
     //console.log(saveData);


app.listen(3000, () => console.log("lstn3000"));
app.use(express.static('blob'));
app.use(express.static('NotPong'));
app.use(express.json({limit: "1mb" }));


 function correctArr()
   {  
     saveData.sort(function(a, b){
       return b.score - a.score
     });
    for (i = saveData.length; i > 7; i--) {
      saveData.splice(i, 1);
      console.log(saveData[i]);
      console.log(saveData.length);
    }
    const results = saveData.filter(element => {
      if (Object.keys(element).length !== 0) {
        return true;
      }
    
      return false;
    });
    saveData = results;
    
   }
      

app.get('/dicefight', function(request, response) 
{
  response.sendFile(path.join(__dirname+'/NotPong/index.html'));
});


app.post('/CLItoSV', (request, response) => {
    correctArr(); 
    console.log("I got response!");
    console.log(request.body );
    saveData.push(request.body);
    var reqData = JSON.stringify(saveData);
    fs.writeFile('highscores.json', reqData, (err) => {
      if (err) throw (err);
        console.log(reqData);
        console.log("saved");
    }
    );  
});

app.get('/svtocli', (request, response) => {
  correctArr(); 
  var data=JSON.stringify(saveData);
    response.send(data)
   }
);