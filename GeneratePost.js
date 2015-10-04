var Post = Parse.Object.extend("Post");
var query = new Parse.Query(Post);
query.select("EventName", "Date", "Location");
query.find({
  success: function(results) {
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
	  var eventName = object.get('EventName');
	  var date = object.get('Date');
	  var location= object.get('Location');
	  console.log(eventName);
	  console.log(date);
	  console.log(location);
	  console.log(" ");
    }
  },
    error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
