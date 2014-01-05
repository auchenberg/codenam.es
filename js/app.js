(function () {

    var projectsList = [];



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
    var elmHeader = document.querySelector('.main h1');
    var elmMain = document.querySelector('.main');
    var elmFront = document.querySelector('.main .front');
    var elmDownloadLink = document.querySelector('.download-slides');

    function onClick() {

        elmMain.classList.toggle('active');

        if(elmMain.classList.contains('active')) {

            var codeName = generate();
            elmHeader.innerHTML = codeName;
            elmDownloadLink.href = '/slides.html?n=' + codeName;
        }
    }

    elmFront.addEventListener('click', onClick, false);
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

