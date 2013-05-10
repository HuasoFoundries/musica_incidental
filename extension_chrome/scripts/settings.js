var UpgradeDB=false  ;
var LemonStore= {};
var MaxIdEvento=0;
var db_listener =db_listener || new jQuery.Deferred();
var GotInfo =GotInfo || new jQuery.Deferred();
var LoggedIn=LoggedIn || new jQuery.Deferred();
var bktimer=null;
var entries = []; // Cache of current working directory's entries.
var currentLi = 1; // Keeps track of current highlighted el for keyboard nav.
var filer;
var logger;
var cwd = null;	
 var fs = null;
 var preview;
var html = [];
var openFSButton ;
window.requestFileSystem = window.requestFileSystem ||
                           window.webkitRequestFileSystem;
window.URL = window.URL || window.webkitURL;

var Linkear = function(filename) {
	 fs.root.getFile(filename+'.lnk', {create: true}, function(fileEntry) {

    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function(fileWriter) {

      fileWriter.onwriteend = function(e) {
        console.log('Write completed.');
      };

      fileWriter.onerror = function(e) {
        console.log('Write failed: ' + e.toString());
      };

       var blob = new Blob(['sounds/'+filename], {type: 'text/plain'});

      fileWriter.write(blob);

    }, onError);

  }, onError);
};

require(["jquery","lib/logger","lib/dnd","lib/basicapp"],function(jQuery) {
  logger = new Logger('#log');
 


  openFSButton = document.querySelector('#openFSButton');
 preview = document.querySelector('#preview');
 logger = new Logger('#log');

 
 
 
	jQuery(document).ready(function() {
		console.log('listo');
		 var dnd = new DnDFileController('body', function(files) {
		    [].forEach.call(files, writeFile);
		  });
		  openFS();

		  jQuery('#restablecer').click(function() {
		  	Linkear('be_my_lover.mp3');
		  	Linkear('me_voy_a_la_mierda.mp3');
		  	Linkear('cuek.swf');
		  	Linkear('chan.swf');
		  	Linkear('chanchan.swf');
		  	Linkear('soporte-tecnico.swf');
		  	Linkear('dostor.swf');
		  	
		  	 openFS();
		  });
	});

});