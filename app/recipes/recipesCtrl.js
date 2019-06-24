
app.controller("recipesCtrl", function($scope, userSrv, $location) {

    if (!userSrv.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.user = userSrv.getActiveUser();

})