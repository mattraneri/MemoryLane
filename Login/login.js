$(document).ready(function(){

  $('#submit').on("click",function(){
    var username = $('#username').val();
    var password = $('#password').val();
    var url = "http://memorylane-mattzap.rhcloud.com/login.php?user=" + username + "&pass=" + password;
    $.ajax({url: url,
      success: function(response){
        if(response == "SUCCESS")
      }
    });
    });
  });