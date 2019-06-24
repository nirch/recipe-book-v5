
app.factory("recipeSrv", function($q, $http, userSrv) {

    // All of these variables are a hack becasue we don't have a server side
    // mianitng all the recipes in the memory
    var recipes = [];
    var wasEverLoadedFromJSON = false;
    var nextRecipeId;

    // New ES6 syntax for creating a constructor
    class Recipe {
        constructor(plainRecipe) {
            this.id = plainRecipe.id;
            this.name = plainRecipe.name;
            this.desc = plainRecipe.desc;
            this.img = plainRecipe.img;
        }
    }

    function getActiveUserRecipes() {
        var async = $q.defer();

        if (wasEverLoadedFromJSON) {
            async.resolve(recipes);
        } else {
            var activeUserId = userSrv.getActiveUser().id;
            wasEverLoadedFromJSON = true;
            $http.get("app/model/data/recipes.json").then(function(res) {
                for (var i = 0; i < res.data.length; i++) {
                    if (res.data[i].userId === activeUserId) {
                        recipes.push(new Recipe(res.data[i]));
                    }
                }

                nextRecipeId = res.data.length;
                async.resolve(recipes);
            }, function(err) {
                wasEverLoadedFromJSON = false;
                async.reject(err);
            });
        }

        return async.promise;
    }

    function addRecipe(name, desc, img) {
        var async = $q.defer();

        // Creating an object elelment to pass to the contructor
        var plainRecipe = {
            "id": nextRecipeId,
            "name": name,
            "desc": desc,
            "img": img
        }
        var newRecipe = new Recipe(plainRecipe);
        recipes.push(newRecipe);

        // preparing the id for the next addition
        ++nextRecipeId;

        async.resolve(newRecipe);

        return async.promise;
    }

    return {
        getActiveUserRecipes: getActiveUserRecipes,
        addRecipe: addRecipe
    }



});