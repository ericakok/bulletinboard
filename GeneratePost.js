var Post = new Parse.Object.extend("Post");
var post = new Parse.Query(Post);
var e = "Explosion";
post.equalTo("Title", "Explosion");
console.log(post);
post.find({
  success: function(results) {
    alert("Successfully retrieved Post " + results[0].id);
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
