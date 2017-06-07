var http = require('http');
const uuidV4 = require('uuid/v4');

global.storge = {};

var appRouter = function(app) {
 app.get("/creditcard/:token", function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var answer = {
	'credit-card': storge[req.params.token]
    };
    res.status(200).send(JSON.stringify(answer)); 
 });

 app.post("/creditcard", function(req, res) {
    var token = uuidV4();
    storge[token] = req.body['credit-card'];
    var answer = {
	'token': token
    };
    res.status(200).send(JSON.stringify(answer));
 });

}
 
module.exports = appRouter;

