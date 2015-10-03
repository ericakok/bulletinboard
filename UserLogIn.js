function userLogIn() {
  var user = Parse.User;
  // $("[name=username]").val()
  user.logIn(document.getElementsByName("username")[0].value, document.getElementsByName("password")[0].value, {
  success: function(user) {
    //send to main page

    document.location.href = "/";
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
    if (error.code = 101) {
      alert("Authentication failed. Please check your username and password and try again.");
    }

  }
});
}
