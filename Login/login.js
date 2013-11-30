$(document).ready(function(){
Parse.initialize("BIKAjoie2DfWo8w3022C7kgXlJpUoYFWv8Kwsoog", "cOqVO2RyFUDLBtfv5TzmpEZHsg5ThCdXnOtQrxsw");

$('#submit').click(function(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  Parse.User.logIn(username, password, {
  success: function(user) {
    alert("Logged in!")
  },
  error: function(user, error) {
    alert("Incorrect Credentials.")
  }
});
});
});