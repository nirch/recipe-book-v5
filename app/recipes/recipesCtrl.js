
app.controller("recipesCtrl", function($scope, userSrv, $location) {

    if (!userSrv.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.user = userSrv.getActiveUser();

    $scope.recipes = [
        {
            "name": "Shakshuka",
            "desc": "Eggs dish with tomato",
            "img": "https://downshiftology.com/wp-content/uploads/2015/11/shakshuka-12.jpg"
        },
        {
            "name": "Greek Salad",
            "desc": "Tomato and olives and cheese",
            "img": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/23/0/BX0204_greek-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1529943050536.jpeg"
        }
    ]

})