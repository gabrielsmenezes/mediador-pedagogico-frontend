const express = require('express')

const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,'/dist/')))

app.get(/.*/, function(req, res){
	res.sendfile(__dirname+ "/dist/index.html");
});

const port = process.env.PORT || 8081
app.listen(port)

console.log('Listening on port: ' + port)
