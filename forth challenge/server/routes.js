module.exports = function(app) {

	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
        console.log("in /");
	});

	var funnyStuff = {question: 'Why did the chicken cross the road?', answer: 'To get to the other side'};

	app.get('/data', function(req, res) {
		res.json(funnyStuff);
        console.log("in /data");
	});

    app.get('/try/:question', function(req, res) {
        //res.json(funnyStuff = {question: req.query.question, answer: 'ans'});
        res.json(funnyStuff = {question: 'ques', answer: req.params.question});
        //console.log(req.params.question);
        console.log("in /try");
    });
};