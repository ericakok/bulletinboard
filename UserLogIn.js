function userLogIn() {
  Parse.initialize("MGG1O5pajQgDqEePY3vJVYeTFgMzlDeQldgNboSz", "CLsQXkPpbgWWbNXuvsmhr6oHBLA5hsoRFKloseXm");
  var user = Parse.User;
  // $("[name=username]").val()
  user.logIn(document.getElementsByName("username")[0].value, document.getElementsByName("password")[0].value, {
  success: function(user) {
    //send to main page

    document.location.href = "/";
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
    if (error.code = UserInvalidLoginParams) {
      alert(error.message);
      userLogin();
    }

  }
});
}
