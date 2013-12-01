//userId
//headline
//text
//media

$(document).ready(function(){
  steroids.view.navigationBar.show("New Timeline");

  var userId = localStorage.username;
  $('#submit').on("click",function(){
    var headline = $("#headline").val();
    var text = $("#text").val();
    if($("#linkSubmit").attr("type") == "text"){
      var link = $("#linkSubmit").val();
      $.ajax({url:
        "http://memorylane-mattzap.rhcloud.com/createTimeline.php?userId=" + localStorage.userId +"&headline="+headline+"&text="+text+"&media="+link,
        success:function(){
          document.write("SUCCESS");
        }});
    };
  });


  $('#linkSubmitButton').on("click",function(){
    $('#imgSubmit').hide();
    $('#submit').before("<input type='text' id='linkSubmit'>");
  });
  
  $("#imgSubmit").on("click",function(){
    $("#linkSubmitButton").hide();
  });
});