var UpgradeDB=false  ;
var LemonStore= {};
var MaxIdEvento=0;
var db_listener =db_listener || new jQuery.Deferred();
var GotInfo =GotInfo || new jQuery.Deferred();
var LoggedIn=LoggedIn || new jQuery.Deferred();
var bktimer=null;

	
 chrome.extension.getURL
	 
require(["jquery","lib/basicapp"],function(jQuery) {

			jQuery(document).ready(function() {

				listFS();

				/*var sonidos=chrome.extension.getBackgroundPage().sonidos;
				for(i=0;i<sonidos.length;i++) {
					var sonido=sonidos[i];
					if(sonido[1]=='swf') {
						var elemento=jQuery('<li/>').append('<embed  src="sounds/'+sonido[0]+'.'+sonido[1]+'" type="application/x-shockwave-flash" width="70" height="90">'+sonido[0]);
					} else if (sonido[1]=='mp3') {
						var elemento=jQuery('<li/>').append('<audio controls><source src="sounds/'+sonido[0]+'.'+sonido[1]+'" /></audio>'+sonido[0]);	
					}
					elemento.appendTo('#botonesysonidos');
				}*/
			
		 jQuery('#settings').click(function() {
		 	chrome.tabs.create( {
			'url': chrome.extension.getURL( 'settings.html' )
		});
		 });


			});

	});