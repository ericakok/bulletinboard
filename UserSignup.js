function UserSignup() {
  var user = new Parse.User();
  var name = document.getElementById();//Fill in later
  var pass = document.getElementById();//Fill in later
  user.set("username", name);
  user.set("password", pass);
  user.signUp(null, {
    success: function(user) {
      alert("Success!");
    },
    error: function(user, error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}
