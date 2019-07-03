
app.controller("newRecipeCtrl", function($scope, recipeSrv, $log, userSrv, $location) {

    $scope.name = "";
    $scope.desc = "";
    $scope.img = {};

    $scope.addRecipe = function() {
       recipeSrv.addRecipe($scope.name, $scope.desc, $scope.img.src).then(function(newRecipe) {
            $log.info("new recipe added: " + JSON.stringify(newRecipe));

            // Sending an email for each new recipe
            var activeUser = userSrv.getActiveUser();
            var template_params = {
                "user_email": activeUser.email,
                "recipe_name": newRecipe.name,
                "user_name": activeUser.fname,
                "recipe_url": $location.absUrl()
             }
             var service_id = "default_service";
             var template_id = "new_recipe";
             emailjs.send(service_id, template_id, template_params);

             $("#modelId").modal('hide');

       });
    }

    $scope.cancelNewRecipe = function() {
        $scope.name = "";
        $scope.desc = "";
        $scope.img = {}; 
        $("#modelId").modal('hide')
    }


})