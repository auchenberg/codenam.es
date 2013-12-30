(function () {

     // NSA Codename sources;
     // - http://www.linkedin.com/pub/jason-miller/39/741/a49
     // - https://www.schneier.com/blog/archives/2013/10/code_names_for.html
     // - http://en.wikipedia.org/wiki/Terrorist_Surveillance_Program

    var projectsList = [
        'ANCHORY',
        'AMHS',
        'NUCLEON',
        'TRAFFIC',
        'THIEF',
        'ARC',
        'MAP',
        'SIG',
        'NAV',
        'COAST',
        'LINE',
        'DISH',
        'FIRE',
        'FAST',
        'SCOPE',
        'OCTAVE',
        'CONTRA',
        'PIN',
        'WALE',
        'UTT',
        'WEB',
        'CANDID',
        'MICHIGAN',
        'PLUS',
        'ASSOCIATION',
        'MAIN',
        'WAY',
        'FASCIA',
        'OCTSKY',
        'WARD',
        'INTE',
        'LINK',
        'METRICS',
        'BANYAN',
        'MARINA',
        'HIGH',
        'LANDS',
        'VAGRANT',
        'MAGNETIC',
        'MINERAL',
        'LIZE',
        'OCEAN',
        'LIFE',
        'SAFER',
        'GENIE',
        'BLACK',
        'HEART',
        'DROP',
        'MIRE',
        'CUSTOMS',
        'DEW',
        'SWEEPER',
        'RADON',

        'ECHELON',
        'MAIN',
        'CORE',
        'MINARET',
        'SHAM',
        'ROCK',
        'PROMIS',
        'BLARNEY',
        'RAGTIME',
        'Turbulence',
        'PIN',
        'WALE',
        'MAIN',
        'WAY',
        'UP',
        'STREAM',
        'Room',
        '641A',
        'PRISM',
        'Bound',
        'less',
        'Informant',
        'X',
        'Key',
        'score',
        'Dropmire',
        'Fair',
        'view',
        'Surveillance',
        'Detection',
        'Unit',
        'Bull',
        'run',
        'IMP',
        'TEMPORE',
        'Trail',
        'blazer',
        'Thin',
        'Thread',
        'STELLAR',
        'WIND'
    ];

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

    var elmHeader = document.querySelector('.main h1');
    var elmMain = document.querySelector('.main');

    function onClick() {
        elmMain.classList.toggle('active');

        if(elmMain.classList.contains('active')) {
            elmHeader.innerHTML = generate();
        }
    }

    elmMain.addEventListener('click', onClick, false);

})();

(function () {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46740129-1', 'codenam.es');
  ga('send', 'pageview');
})();
