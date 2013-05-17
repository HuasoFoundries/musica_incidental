function lsetItemN(key,value){
	window.localStorage.removeItem(key);
	window.localStorage.setItem(key,parseFloat(value));
}
function lgetItemN(key){
	var value;
	try{
		value=window.localStorage.getItem(key);
		if(value=='NaN') value=0;
	}catch(e){
		value=0;
	}
	return value;
}

function lsetItem(key,value){
	window.localStorage.removeItem(key);
	window.localStorage.setItem(key,value);
}
function lgetItem(key){
	var value;
	try{
		value=window.localStorage.getItem(key);
	}catch(e){
		value="null";
	}
	return value;
}
function lremoveItem(key){
	var value;
	try{
		value=window.localStorage.removeItem(key);
	}catch(e){
		value="null";
	}
	return value;
}
function ssetItem(key,value){
	window.sessionStorage.removeItem(key);
	window.sessionStorage.setItem(key,value);
}

function sgetItem(key){
	var value;
	try{
		value=window.sessionStorage.getItem(key);
	}catch(e){
		value="null";
	}
	return value;
}

function sremoveItem(key){
	var value;
	try{
		value=window.sessionStorage.removeItem(key);
	}catch(e){
		value="null";
	}
	return value;
}

var SingleTonTray=function() {
		//si no existe ID de ventana preexistente, prosigo la apertura de la actual y guardo su WindowId
		
		
		//si ya existe el ID de la ventana, aborto la apertura de una nueva, y cierro la que está abierta
		
		 
	}