(function () {

    var projectsList = [];

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function getJSON(url, successHandler, errorHandler) {
      var xhr = new XMLHttpRequest();
      xhr.open('get', url, true);

      xhr.onreadystatechange = function() {
        var status;
        var data;
        if (xhr.readyState == 4) {
          status = xhr.status;
          if (status == 200) {
            data = JSON.parse(xhr.responseText);
            successHandler && successHandler(data);
          } else {
            errorHandler && errorHandler(status);
          }
        }
      };

      xhr.send();
    }

    function generate() {
        var hash = [];
        var words = 2;
        var separator = '';

        for(var i=0; i < words; i++) {
            var randomByte = Math.floor(Math.random() * projectsList.length);
            hash.push(projectsList[randomByte].toLowerCase());
        }

        return hash.join(separator);
    }

    function initialize() {
        getJSON('/js/data.json', function(data) {
            projectsList = data;
        });
    }

    function generateSlide(codeName) {

          var elmCanvas = document.querySelector('.slide');
          var ctx = elmCanvas.getContext('2d');
          var img = new Image;
          img.onload = function() {
            elmCanvas.width = img.width;
            elmCanvas.height = img.height;

            ctx.drawImage(img, 0, 0, img.width, img.height);

            ctx.font = 'bold 12pt Times';
            ctx.textAlign = 'center';
            ctx.fillText(codeName.toUpperCase(), elmCanvas.width / 2, 210);


            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
            var date = new Date();
            var currentMonth = months[date.getMonth()];

            ctx.font = '8pt Times';
            ctx.fillText(months[date.getMonth()] + ' ' + date.getFullYear(), elmCanvas.width / 2, 330);

            // window.location = elmCanvas.toDataURL("image/jpeg");
          };

          img.src = '/images/slide-template-pp.jpg';


    }

    var elmHeader = document.querySelector('.main h1');
    var elmMain = document.querySelector('.main');
    var elmStart = document.querySelector('.start');
    var elmResult = document.querySelector('.result');

    function onClick() {

        elmMain.classList.toggle('active');
        elmStart.classList.toggle('hidden');
        elmResult.classList.toggle('hidden');

        if(elmMain.classList.contains('active')) {
            var codeName = generate();
            generateSlide(codeName);
        }
    }

    elmMain.addEventListener('click', onClick, false);

    initialize();

})();

(function () {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46740129-1', 'codenam.es');
  ga('send', 'pageview');
})();

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=423774561071001";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

