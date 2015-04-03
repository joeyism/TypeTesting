var express = require('express')
var app = express()
var fs = require('fs');
var path = require('path');
	

app.use(express.static(path.join(__dirname, 'app'))); //  "public" off of current is root


app.get('/', function (req, res) {
			res.send('Hello World!')
			})

app.use('/restful',function(req,res){

			console.log(req.method);
			console.log(Date.now());
		if (req.method ==='POST'){
			console.log(req);
		fs.writeFile(Date.now()+'.dat',req,function(err){
			if (err){
			console.log(err);
			res.send(500);
			}else{
			res.send(200);
			}
			});
		} else if (req.method === 'GET'){
		res.send('rawr');
		}
		});


app.listen(80);
