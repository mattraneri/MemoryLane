$(document).ready(function(){
    steroids.view.navigationBar.show("Image");

  var afterPicView = new steroids.views.WebView("createTimeline/afterPic.html");
  $('#newPic').on('click',function(){
      navigator.camera.getPicture(imageReceived, cameraFail, {
      sourceType:Camera.PictureSourceType.CAMERA,
      quality: 100,
      destinationType: Camera.DestinationType.FILE_URI,
      correctOrientation: true,
    });
  });
  $('#devicePic').on('click',function(){
      navigator.camera.getPicture(imageReceived, cameraFail, {
      sourceType:Camera.PictureSourceType.PHOTOLIBRARY,
      quality: 100,
      destinationType: Camera.DestinationType.FILE_URI,
      correctOrientation: true,
    });
  });
  var imageReceived = function(imageURI){
    localStorage.imageURI = imageURI;
    steroids.layers.push(afterPicView);
  };
  var cameraFail = function(message){
    alert(message);
  }
});