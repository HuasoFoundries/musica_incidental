var UpgradeDB=false  ;
var LemonStore= {};
var MaxIdEvento=0;
var db_listener =db_listener || new jQuery.Deferred();
var GotInfo =GotInfo || new jQuery.Deferred();
var LoggedIn=LoggedIn || new jQuery.Deferred();
var bktimer=null;

	
 
	 
require(["jquery","lib/basicapp"],function(jQuery) {

			jQuery(document).ready(function() {

				listFS();

			 
			
				 jQuery('#settings').click(function() {
				 	chrome.tabs.create( {
					'url': chrome.extension.getURL( 'settings.html' )
				});
		 });


			});

	});