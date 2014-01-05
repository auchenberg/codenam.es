(function() {

  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  var elmCanvas = document.querySelector(".slide");
  var ctx = elmCanvas.getContext("2d");

  // Draw codename
  var codeName = getParameterByName("n");
  ctx.font = "31pt Times";
  ctx.textAlign = "center";
  ctx.fillText(codeName.toUpperCase() + (Math.floor(Math.random() * 99) + 8) + "/ES-XN", elmCanvas.width / 2, 190);

  // Draw month + year
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var date = new Date();

  ctx.font = "14pt Times";
  ctx.fillText(months[date.getMonth()] + " " + date.getFullYear(), elmCanvas.width / 2, 485);

  // Draw template
  var img = new Image();
  img.onload = function() {
    elmCanvas.width = img.width;
    elmCanvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);

    window.location = elmCanvas.toDataURL("image/jpeg");
  };
  img.src = "/images/slide-template.jpg";

})();
