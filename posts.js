window.addEventListener("load", function () {
  var form = document.getElementById("postform");
  var loc = document.getElementById("location");
  var FD = new FormData(form);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var Post = Parse.Object.extend("Post");
    var post = new Post();
    post.set("Title", loc.value);
    post.save(null, {
      success: function(post) {
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + post.id);
      },
      error: function(post, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
  });
});
