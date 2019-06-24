
app.factory("userSrv", function($q) {

    var activeUser = null;

    function User(plainUser) {
        this.id = plainUser.id;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
    }


    function isLoggedIn() {
        return activeUser ? true : false;
    }

    // login will check if the user and password exists. If so it will update the active user 
    // variable and will return it
    function login(email, pwd) {
        var async = $q.defer();

        if (email === "nir@nir.com" && pwd === "123") {
            activeUser = new User({ id: 1, fname:"Nir", lname: "Channes", email: "nir@nir.com" });
            async.resolve(activeUser);
        } else {
            async.reject(401);
        }

        return async.promise;
    }


    return {
        isLoggedIn: isLoggedIn,
        login: login
    }

});