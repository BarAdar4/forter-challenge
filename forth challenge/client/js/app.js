// App
var app = angular.module('app', []);

// Service to fetch some data..
app.factory('dataServ', ['$http',function($http) {
    return {
        get : function() {
            return $http.get('/data');
        },

		getAnswer : function (question) {
        	return $http.get('/try/' + question)
        },

        getData : function() {
        	return $http.get('/data');
		}
    }
}]);

// App controller
app.controller('appController', ['$scope','dataServ', function($scope, Data) {
	
	$scope.funnyStuff = {question: '', answer: ''};
	$scope.answer = {question: 'no ques', answer: "no ques"};
	$scope.data = '';

	//ques is a function
	$scope.ques = function (question) {
		Data.getAnswer(question)
			.success(function (resp) {
				$scope.answer = resp
            })
    }

    $scope.show = function() {
		Data.getData()
			.success(function (resp){
				final = '';
				for (var myKeyin in resp){
					final = final +resp[myKeyin].question;
                    final = final + ": ";
                    final = final +resp[myKeyin].answer;
                    final = final + "\n";
				}

				$scope.data = final
			})


	}

	Data.get()
		.success(function(resp) {
			$scope.funnyStuff = resp;
		});



}]);

function startProcess(){
    setInterval(intervalFunc, 1500);
}

function intervalFunc() {
    var x = angular.element(document.getElementById('appController')).scope().$apply("ques('hi')");
}

