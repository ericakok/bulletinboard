function setupParse() {
Parse.initialize("MGG1O5pajQgDqEePY3vJVYeTFgMzlDeQldgNboSz", "CLsQXkPpbgWWbNXuvsmhr6oHBLA5hsoRFKloseXm");
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});
}
