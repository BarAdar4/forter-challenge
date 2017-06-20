
var answers = require("./answers.js")
module.exports = function(app) {


	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
        console.log("in /");
	});


	//questions the users asked (for history)
	var asked_questions = {};

	app.get('/data', function(req, res) {
		to_send={};
		var count = 'a';
		Object.keys(asked_questions).forEach(function (question_d){
			var answer_d = asked_questions[question_d];
			to_send[count] = {question: question_d, answer: answer_d};
			console.log("here");
			count = String.fromCharCode(count.charCodeAt(0) + 1);
		});
		res.json(to_send);
        console.log("in /data");
	});

    app.get('/ask/:question', function(req, res) {
        //res.json(funnyStuff = {question: req.query.question, answer: 'ans'});
		full_answer_package = {question: req.params.question, answer: answers.getAnswer(req.params.question)};
		asked_questions[full_answer_package.question] = full_answer_package.answer;
        res.json(full_answer_package);
        //console.log(req.params.question);
        console.log("in /ask");
    });
};