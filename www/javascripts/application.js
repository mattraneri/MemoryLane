$(document).ready(function(){
  steroids.view.navigationBar.show("MemoryLane");
  //var createView = new steroids.views.WebView("home.html");
  var timelineView = new steroids.views.WebView("timeline/index.html");
  if(localStorage.username){
    var url = "http://memorylane-mattzap.rhcloud.com/getUserInfo.php?user=" + localStorage.username;
  }
  $.ajax({url: url,
    success: function(response){
      var firstDivision = response.split("|");
      localStorage.userId = firstDivision[0];
      var timelineIds = firstDivision[1].split(",");
      var timelineNames = firstDivision[2].split(",");

      var timelineHTML = "";
      
      for(var i = 0; i < timelineIds.length; i++){
        timelineHTML +="<a href='timeline/embed/index.html?"
        timelineHTML += timelineIds[i]+"'>"
        timelineHTML +="<li id='"+timelineIds[i]+"'>";
        timelineHTML += timelineNames[i];
        timelineHTML += "</li>";
        timelineHTML += "</a>";

      }

      $('#timelineMenu').html(timelineHTML);
    }
  });

  var createView = new steroids.views.WebView("createTimeline/create.html");
  $('#createButton').on("click", function(){
    localStorage.imageURI = null;
    steroids.layers.push(createView);
  });
});