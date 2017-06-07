var http = require('http');
const uuidV4 = require('uuid/v4');

global.storge = {};

var appRouter = function(app) {
 Object.keys(storge).forEach(function(key) {
    console.log(key);
 });
 app.get("/creditcard/:token", function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var answer = {
	'credit-card': storge[req.params.token]
    };
    res.status(200).send(JSON.stringify(answer)); 
    console.log("get request");
 });

 app.post("/creditcard", function(req, res) {
    var token = uuidV4();
    storge[token] = req.body['credit-card'];
    //console.log(req.body['credit-card']);
    var answer = {
	'token': token
    };
    res.status(200).send(JSON.stringify(answer));
    console.log("post request"); 
 });

}
 
module.exports = appRouter;

