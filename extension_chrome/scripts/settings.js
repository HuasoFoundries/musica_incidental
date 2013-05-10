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
	});

});