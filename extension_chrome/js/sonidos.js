var UpgradeDB=false  ;
var LemonStore= {};
var MaxIdEvento=0;
var db_listener =db_listener || new jQuery.Deferred();
var GotInfo =GotInfo || new jQuery.Deferred();
var LoggedIn=LoggedIn || new jQuery.Deferred();
var bktimer=null;

require(["jquery","lib/basicapp","lib/jquery.typewatch"],function(jQuery) {

	jQuery(document).ready(function() {

		listFS();

		jQuery('#settings').click(function() {
			chrome.tabs.create({
				'url': chrome.extension.getURL( 'settings.html' )
			});
		});

		/*jQuery('#search').keyup(function(){
			var txt = jQuery(this).val().toLowerCase();
			jQuery('#botonesysonidos li').each(function(){
				var li = jQuery(this);
				li.toggle(li.attr('class').toLowerCase().indexOf(txt) >= 0);
			});
		});*/
			
			jQuery('#search').typeWatch({
				callback: function(value) {
					 jQuery('#botonesysonidos li').each(function(){
						var li = jQuery(this);
						li.toggle(li.attr('class').toLowerCase().indexOf(value) >= 0);
					});
				},
				wait: 700,
				highlight: false,
				captureLength: 0
			});


		jQuery('#soundstab').click(function() {
				chrome.tabs.create( {
    				'url': 	 chrome.extension.getURL( 'bigtab.html' )	} 
    			
     			);
		});


	});

});