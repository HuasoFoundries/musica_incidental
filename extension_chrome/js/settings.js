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



var urls_sonidos=[
['http://www.axonema.net/instants/swf/le-pego.swf','instants.cl'],
['http://www.axonema.net/instants/swf/cortala-israel.swf','instants.cl'],
['http://www.axonema.net/instants/swf/feomamon.swf','instants.cl'],
['http://www.axonema.net/instants/swf/manjar-colun.swf','instants.cl'],
['http://www.axonema.net/instants/swf/tranquilo-papa.swf','instants.cl'],
['http://www.axonema.net/instants/swf/salvame-homero.swf','general'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/alachuchesu.swf?raw=true','general'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/avispate-bonva.swf?raw=true','general'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/ayuwoki.swf?raw=true','general'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/be_my_lover.mp3?raw=true','general'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/chan.swf?raw=true','general'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/chanchan.swf?raw=true','general'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/choromota.swf?raw=true','general'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/cqc-mono.swf?raw=true','general'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/cuek.swf?raw=true','general'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/dostor.swf?raw=true','general'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/hermana.swf?raw=true','general'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/pesho-pesho.swf?raw=true','general'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/soporte-tecnico.swf?raw=true','general'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/vieja-culia.swf ?raw=true','general'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/wena-naty.swf?raw=true','general'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/zafradas.swf?raw=true','general'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/bananero/dios_te_bendiga.mp3?raw=true','el bananero'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/bananero/hecha_mierda.mp3?raw=true','el bananero'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/bananero/me_voy_a_la_mierda.mp3?raw=true','el bananero'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/bananero/saliste_puto_como_la_abuela.mp3?raw=true','el bananero'],
['http://www.axonema.net/instants/swf2/peluca.swf','el bananero'],
['http://www.axonema.net/instants/swf2/pario.swf','el bananero'],
['http://www.axonema.net/instants/swf2/bigote.swf','el bananero'],
['http://www.axonema.net/instants/swf2/lechero.swf','el bananero'],
['http://www.axonema.net/instants/swf2/trolazo.swf','el bananero'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/alejo_y_valentina/abajarame_la_lechuga.mp3?raw=true','alejo y valentina'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/alejo_y_valentina/dejame_de_hinchar_las_pelotas.mp3?raw=true','alejo y valentina'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/alejo_y_valentina/esperame_en_la_catrera.mp3?raw=true','alejo y valentina'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/alejo_y_valentina/los_muertos_y_los_vivos.mp3?raw=true','alejo y valentina'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/alejo_y_valentina/me_cague.mp3?raw=true','alejo y valentina'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/alejo_y_valentina/me_parece_una_buena_idea.mp3?raw=true','alejo y valentina'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/alejo_y_valentina/quiero_y_al_baño.mp3?raw=true','alejo y valentina'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/alejo_y_valentina/te_haces_el_malo.mp3?raw=true','alejo y valentina'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/alejo_y_valentina/triangulito_queres.mp3?raw=true','alejo y valentina'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/alejo_y_valentina/vamos_a_comer_comida.mp3?raw=true','alejo y valentina'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/alejo_y_valentina/vos_sos_dios.mp3?raw=true','alejo y valentina'],
['https://github.com/amenadiel/musica_incidental/blob/master/sounds/alejo_y_valentina/yo_quiero_un_sanguche.mp3?raw=true','alejo y valentina'],
['http://www.axonema.net/instants/swf2/bueno-chao.swf','alejo y valentina'],
['http://www.axonema.net/instants/swf2/la-plata.swf','alejo y valentina'],
['http://www.axonema.net/instants/swf2/raton.swf','alejo y valentina'],
['http://www.axonema.net/instants/swf/flotar-carlitox.swf','alejo y valentina'],
['http://www.axonema.net/instants/swf2/revolear-patas.swf','alejo y valentina'],
['http://www.axonema.net/instants/swf2/viejo-viteh.swf','alejo y valentina'],
['http://www.axonema.net/instants/swf2/jojojo.swf','alejo y valentina'],
['http://www.axonema.net/instants/swf2/carlitox-idea.swf','alejo y valentina'],
['http://www.axonema.net/instants/swf2/tocaron.swf','alejo y valentina'],
['http://www.axonema.net/instants/swf2/respeto.swf','alejo y valentina'],
['http://www.axonema.net/instants/swf2/loco-viteh.swf','alejo y valentina'],
['http://www.axonema.net/instants/swf2/risa-alejo.swf','alejo y valentina'],
['http://www.axonema.net/instants/swf2/sistema.swf','alejo y valentina'],
['http://www.axonema.net/instants/swf2/chaleco.swf','alejo y valentina'],
['http://www.axonema.net/instants/swf2/valentina.swf','alejo y valentina'],
['http://www.axonema.net/instants/swf2/sanguche.swf','alejo y valentina'],
['http://www.axonema.net/instants/swf2/comida.swf','alejo y valentina']
];
  

require(["jquery","lib/logger","lib/dnd","lib/basicapp"],function(jQuery) {
  


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

		  for(i=0;i<urls_sonidos.length;i++) {
		  	filename=urls_sonidos[i][0].split('/').slice(-1);
		  	filename=filename[0].replace('?raw=true','');
		  	jQuery('#urls_sonidos').append('<li><a class="downloadme" data-url="'+urls_sonidos[i][0]+'" data-filename="'+filename+'">('+urls_sonidos[i][1]+') '+filename+'</a></li>');
		  }

		  jQuery('#urls_sonidos').on('click','a',function() {
		  	var filename=jQuery(this).data('filename');
		  	var url=jQuery(this).data('url');
		  	downloadFile(url, filename);
		  });
		  jQuery('#soundstab').click(function() {
				chrome.tabs.create( {
    				'url': 	 chrome.extension.getURL( 'bigtab.html' )	} 
    			
     			);
		  });

	});

});