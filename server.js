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

saveData.sort(function(a, b){
  return b.score - a.score
});
function writeData(data)
{
	fs.writeFile('highscores.json', data, (err) => {
	    if(err) throw err;
	    console.log('file has been saved');
    });
}
 

app.get('/dicefight', function(request, response) 
{
  response.sendFile(path.join(__dirname+'/NotPong/index.html'));

});

app.post('/CLItoSV', (request, response) => {
    console.log("I got response!");
    saveData.push(request.body);
 var reqData = JSON.stringify(saveData);
    writeData(reqData);           
});

app.get('/svtocli', (request, response) => {
  saveData.sort(function(a, b){
    return b.score - a.score
});
	for (i = 7; i < saveData.length;) {
   	 saveData = saveData.slice(0, -1);
	console.log("array uzunlugu"+saveData.length);
}
	for(var i = saveData.length; i > 0; i--)
		{
			console.log(saveData[i]+" bu "+i);
			if(saveData[i] === {} )
			{

			 saveData.splice(i,1);
			
			}
		}
      	
  var data=JSON.stringify(saveData);
	writeData(data);
	response.send(data);
	
   });
