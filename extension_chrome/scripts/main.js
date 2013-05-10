

  var sonidos=[];
  
require(["jquery"],function(jQuery) {
	jQuery.ajax({url:'file:///home/amena/git/musica_incidental/extension_chrome/sounds/', dataType:'html'}).done(function(data) {
		 
		var cacuca=jQuery(data);
		for(i=0;i<cacuca.length;i++) {
			var archivo=cacuca[i];
			var texto;
			if (archivo.lastChild 
			&& archivo.lastChild.nodeValue 
			&& archivo.lastChild.nodeValue.substr(0,6)=='addRow' ) {
				texto=archivo.lastChild.nodeValue.substr(8);
				comilla=texto.indexOf('"');
				nombrearchivo=texto.substr(0,comilla).split('.');
				if(nombrearchivo[1]=='swf' || nombrearchivo[1]=='mp3' || nombrearchivo[1]=='ogg') sonidos.push(nombrearchivo);
				 
				
			}
			
	
			
			
		}
		 
	});
});