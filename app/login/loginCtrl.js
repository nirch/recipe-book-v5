

app.controller("loginCtrl", function($scope, $location, userSrv, $log /*,$rootScope*/ ) {

    $scope.invalidLogin = false;
    $scope.email = "nirch.work@gmail.com";
    $scope.pwd = "123";

    $scope.login = function() {

        userSrv.login($scope.email, $scope.pwd).then(function(activeUser) {
            $log.info("Successful login with: " + JSON.stringify(activeUser));
            $location.path("/recipes");
            //$rootScope.activeUser = activeUser;
        }, function(err) {
            $scope.invalidLogin = true;
        });

    }

})