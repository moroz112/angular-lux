var app = angular.module('app', []);


mainCtrl.$inject = ['$scope', '$http'];

function mainCtrl($scope, $http) {
    var update = function() {
        $http.get("/notes")
            .success(function(notes) {
                $scope.notes = notes;
            });
    };
    $scope.add = function() {
        var note = {text: $scope.text};
        $http.post("/notes", note)
            .success(function() {
                $scope.text = "";
                update();
            });
    };
    app.get("/notes", function(req,res) {
        var notes = [
            {text: "First note"},
            {text: "Second note"},
            {text: "Third note"}
        ];
        res.send(notes);
    });
}
app.controller('mainCtrl', mainCtrl);