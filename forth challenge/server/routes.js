module.exports = function(app) {

	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
        console.log("in /");
	});

	var funnyStuff = {question: 'Why did the chicken cross the road?', answer: 'To get to the other side'};
	var questions = {'what\'s your name': "bot"};

	app.get('/data', function(req, res) {
		to_send={};
		var count = 'a';
		Object.keys(questions).forEach(function (question_d){
			var answer_d = questions[question_d];
			to_send[count] = {question: question_d, answer: answer_d};
			console.log("here");
			count = String.fromCharCode(count.charCodeAt(0) + 1);
		});
		res.json(to_send);
        console.log("in /data");
	});

    app.get('/try/:question', function(req, res) {
        //res.json(funnyStuff = {question: req.query.question, answer: 'ans'});
		questions[req.params.question]="i dont know";
        res.json(funnyStuff = {question: 'ques', answer: req.params.question});
        //console.log(req.params.question);
        console.log("in /try");
    });
};