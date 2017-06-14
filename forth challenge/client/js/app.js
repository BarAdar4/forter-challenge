// App
var app = angular.module('app', []);

// Service to fetch some data..
app.factory('dataServ', ['$http',function($http) {
    return {
        get : function() {
            return $http.get('/data');
        },

        getTry : function() {
        	return $http.get('/try/dfg');
		},

		getAnswer : function (question) {
        	return $http.get('/try/' + question)
        }
    }
}]);

// App controller
app.controller('appController', ['$scope','dataServ', function($scope, Data) {
	
	$scope.funnyStuff = {question: '', answer: ''};
	$scope.answer = {question: 'no ques', answer: "no ques"};
	
	$scope.ques = function (question) {
		Data.getAnswer(question)
			.success(function (resp) {
				$scope.answer = resp
            })
    }

	Data.getTry()
		.success(function(resp) {
			$scope.funnyStuff = resp;
		});
}]);

