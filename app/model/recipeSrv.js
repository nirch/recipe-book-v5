
app.factory("recipeSrv", function($q, $http) {

    // New ES6 syntax for creating a constructor
    class Recipe {
        constructor(plainRecipe) {
            this.name = plainRecipe.name;
            this.desc = plainRecipe.desc;
            this.img = plainRecipe.img;
        }
    }


    function getActiveUserRecipes() {
        var async = $q.defer();

        var recipes = [];

        var dummyRecipes = [
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
        ];


        for (var i = 0; i < dummyRecipes.length; i++) {
            recipes.push(new Recipe(dummyRecipes[i]));
        }

        async.resolve(recipes);


        return async.promise;
    }


    return {
        getActiveUserRecipes: getActiveUserRecipes
    }



});