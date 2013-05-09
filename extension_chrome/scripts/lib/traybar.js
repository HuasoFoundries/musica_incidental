//(function(){
    function h(a){
	throw a;
    }
    var ancho=465;
    var alto=335;
    var i=void 0,j=!0,k=null,l=!1,n,p=this,r=function(a,b,c){
	a=a.split(".");
	c=c||p;
	!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);
	for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c=c[d]?c[d]:c[d]={}
	};

var aa=function(a){     for(var a=a.split("."),b=p,c;c=a.shift();)if(s(b[c]))b=b[c];else return k;return b;    };
var ba=function(a){
    var b=typeof a;
    if("object"==b)if(a){
	if(a instanceof Array)return"array";
	if(a instanceof Object)return b;
	var c=Object.prototype.toString.call(a);
	if("[object Window]"==c)return"object";
	if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";
	if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"
	    }else return"null";
    else if("function"==b&&"undefined"==typeof a.call)return"object";
    return b
    };
var q=function(a){     return a!==i;     };
var s=function(a){     return a!=k;    };
var t=function(a){     return"array"==ba(a);    };
var ca=function(a){     var b=ba(a);    return"array"==b||"object"==b&&"number"==typeof a.length    };
var u=function(a){     return"string"==typeof a    };
var da=function(a){    return"function"==ba(a)    };
var ea=function(a){    var b=typeof a;    return"object"==b&&a!=k||"function"==b    };
var ha=function(a){    return a[fa]||(a[fa]=++ga)    };

fa="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36);
ga=0;
ia=function(a,b,c){
    //return a.call.apply(a.bind,arguments)
    };
ja=function(a,b,c){
    a||h(Error());
    if(2<arguments.length){
	var d=Array.prototype.slice.call(arguments,
	    2);
	return function(){
	    var c=Array.prototype.slice.call(arguments);
	    //Array.prototype.unshift.apply(c,d);
	    //return a.apply(b,c)
	    }
	}
    return function(){
//    return a.apply(b,arguments)
    }
};
var v=function(a,b,c){
 
    };
var ka=function(a,b){
    var c=Array.prototype.slice.call(arguments,1);
    return function(){
	var b=Array.prototype.slice.call(arguments);
	//b.unshift.apply(b,c);
	//return a.apply(this,b)
	}
    };
   x=Date.now||function(){
    return+new Date
    };
    
var y=function(a,b){
    function c(){}
    c.prototype=b.prototype;
    a.A=b.prototype;
    a.prototype=new c
    };
    
Function.prototype.bind=Function.prototype.bind||function(a,b){
    if(1<arguments.length){
	var c=Array.prototype.slice.call(arguments,1);
	c.unshift(this,a);
	//return v.apply(k,c)
	}
	return v(this,a)
    };
    
var la={};

var ma=function(a,b){
    var c=a.length-b.length;
    return 0<=c&&a.indexOf(b,c)==c
    },na=function(a,b){
    for(var c=1;c<arguments.length;c++)var d=(""+arguments[c]).replace(/\$/g,"$$$$"),a=a.replace(/\%s/,d);
    return a
    },oa=/^[a-zA-Z0-9\-_.!~*'()]*$/,pa=function(a){
    a=""+a;
    return!oa.test(a)?encodeURIComponent(a):a
    },va=function(a){
    if(!qa.test(a))return a;
    -1!=a.indexOf("&")&&(a=a.replace(ra,"&amp;"));
    -1!=a.indexOf("<")&&(a=a.replace(sa,"&lt;"));
    -1!=a.indexOf(">")&&(a=a.replace(ta,"&gt;"));
    -1!=a.indexOf('"')&&(a=a.replace(ua,
	"&quot;"));
    return a
    },ra=/&/g,sa=/</g,ta=/>/g,ua=/\"/g,qa=/[&<>\"]/,wa=function(a,b){
    for(var c=0,d=(""+a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=(""+b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){
	var m=d[g]||"",o=e[g]||"",w=RegExp("(\\d*)(\\D*)","g"),Ib=RegExp("(\\d*)(\\D*)","g");
	do{
	    var z=w.exec(m)||["","",""],E=Ib.exec(o)||["","",""];
	    if(0==z[0].length&&0==E[0].length)break;
	    c=((0==z[1].length?0:parseInt(z[1],10))<(0==E[1].length?0:parseInt(E[1],
		10))?-1:(0==z[1].length?0:parseInt(z[1],10))>(0==E[1].length?0:parseInt(E[1],10))?1:0)||((0==z[2].length)<(0==E[2].length)?-1:(0==z[2].length)>(0==E[2].length)?1:0)||(z[2]<E[2]?-1:z[2]>E[2]?1:0)
	    }while(0==c)
    }
    return c
    };
    
var xa=Array.prototype,ya=xa.indexOf?function(a,b,c){
    return xa.indexOf.call(a,b,c)
    }:function(a,b,c){
    c=c==k?0:0>c?Math.max(0,a.length+c):c;
    if(u(a))return!u(b)||1!=b.length?-1:a.indexOf(b,c);
    for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1
    },za=xa.forEach?function(a,b,c){
    xa.forEach.call(a,b,c)
    }:function(a,b,c){
    for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)
	},Aa=function(a){
   // return xa.concat.apply(xa,arguments)
    },Ba=function(a){
    if(t(a))return Aa(a);
    for(var b=[],c=
	0,d=a.length;c<d;c++)b[c]=a[c];
    return b
    },Ca=function(a,b){
    for(var c=1;c<arguments.length;c++){
	var d=arguments[c],e;
	//if(t(d)||(e=ca(d))&&d.hasOwnProperty("callee"))a.push.apply(a,d);
	//else if(e)for(var f=a.length,g=d.length,m=0;m<g;m++)a[f+m]=d[m];else a.push(d)
	    }
	},Da=function(a,b,c){
    return 2>=arguments.length?xa.slice.call(a,b):xa.slice.call(a,b,c)
    };
    
var Ea="StopIteration"in p?p.StopIteration:Error("StopIteration"),Fa=function(){};

Fa.prototype.next=function(){
    h(Ea)
    };
    
Fa.prototype.Ua=function(){
    return this
    };
var Ga=function(a){
    if(a instanceof Fa)return a;
    if("function"==typeof a.Ua)return a.Ua(l);
    if(ca(a)){
	var b=0,c=new Fa;
	c.next=function(){
	    for(;;){
		b>=a.length&&h(Ea);
		if(b in a)return a[b++];
		b++
	    }
	    };
	    
    return c
    }
    h(Error("Not implemented"))
};
var Ha=function(a,b){
  
};
var Ia=function(a,b,c){
    a=Ga(a);
    try{
	for(;;)if(b.call(c,a.next(),i,a))return j
	    }catch(d){
	d!==Ea&&h(d)
	}
	return l
    };
    
var Ja=function(a,b){
    for(var c in a)b.call(i,a[c],c,a)
	},Ka=function(a){
    var b=[],c=0,d;
    for(d in a)b[c++]=a[d];return b
    },La=function(a){
    var b=[],c=0,d;
    for(d in a)b[c++]=d;return b
    },Ma="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),Na=function(a,b){
    for(var c,d,e=1;e<arguments.length;e++){
	d=arguments[e];
	for(c in d)a[c]=d[c];for(var f=0;f<Ma.length;f++)c=Ma[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])
	    }
	};
    
var Oa=function(a){
    if("function"==typeof a.z)return a.z();
    if(u(a))return a.split("");
    if(ca(a)){
	for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);
	return b
	}
	return Ka(a)
    },Pa=function(a,b,c){
    if("function"==typeof a.forEach)a.forEach(b,c);
    else if(ca(a)||u(a))za(a,b,c);
    else{
	var d;
	if("function"==typeof a.Y)d=a.Y();
	else if("function"!=typeof a.z)if(ca(a)||u(a)){
	    d=[];
	    for(var e=a.length,f=0;f<e;f++)d.push(f)
		}else d=La(a);else d=i;
	for(var e=Oa(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)
	    }
	};

var A=function(a,b){
    this.u={};
    
    this.p=[];
    var c=arguments.length;
    if(1<c){
	c%2&&h(Error("Uneven number of arguments"));
	for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])
	    }else a&&this.Db(a)
	};
	
n=A.prototype;
n.e=0;
n.cb=0;
n.Ka=function(){
    return this.e
    };
    
n.z=function(){
    Qa(this);
    for(var a=[],b=0;b<this.p.length;b++)a.push(this.u[this.p[b]]);
    return a
    };
    
n.Y=function(){
    Qa(this);
    return this.p.concat()
    };
    
n.q=function(a){
    return Ra(this.u,a)
    };
    
n.hb=function(){
    return 0==this.e
    };
n.clear=function(){
    this.u={};
    
    this.cb=this.e=this.p.length=0
    };
    
n.remove=function(a){
    return Ra(this.u,a)?(delete this.u[a],this.e--,this.cb++,this.p.length>2*this.e&&Qa(this),j):l
    };
    
var Qa=function(a){
    if(a.e!=a.p.length){
	for(var b=0,c=0;b<a.p.length;){
	    var d=a.p[b];
	    Ra(a.u,d)&&(a.p[c++]=d);
	    b++
	}
	a.p.length=c
	}
	if(a.e!=a.p.length){
	for(var e={},c=b=0;b<a.p.length;)d=a.p[b],Ra(e,d)||(a.p[c++]=d,e[d]=1),b++;
	a.p.length=c
	}
    };

n=A.prototype;
n.get=function(a,b){
    return Ra(this.u,a)?this.u[a]:b
    };
n.set=function(a,b){
    Ra(this.u,a)||(this.e++,this.p.push(a),this.cb++);
    this.u[a]=b
    };
    
n.Db=function(a){
    var b;
    a instanceof A?(b=a.Y(),a=a.z()):(b=La(a),a=Ka(a));
    for(var c=0;c<b.length;c++)this.set(b[c],a[c])
	};
	
n.qa=function(){
    return new A(this)
    };
    
n.Ua=function(a){
    Qa(this);
    var b=0,c=this.p,d=this.u,e=this.cb,f=this,g=new Fa;
    g.next=function(){
	for(;;){
	    e!=f.cb&&h(Error("The map has changed since the iterator was created"));
	    b>=c.length&&h(Ea);
	    var g=c[b++];
	    return a?g:d[g]
	    }
	};
	
return g
};
var Ra=function(a,b){
    return Object.prototype.hasOwnProperty.call(a,b)
    };
    
var Sa=function(a){
    this.u=new A;
    a&&this.Db(a)
    },Ta=function(a){
    var b=typeof a;
    return"object"==b&&a||"function"==b?"o"+ha(a):b.substr(0,1)+a
    };
    
n=Sa.prototype;
n.Ka=function(){
    return this.u.Ka()
    };
    
n.add=function(a){
    this.u.set(Ta(a),a)
    };
    
n.Db=function(a){
    for(var a=Oa(a),b=a.length,c=0;c<b;c++)this.add(a[c])
	};
	
n.removeAll=function(a){
    for(var a=Oa(a),b=a.length,c=0;c<b;c++)this.remove(a[c])
	};
	
n.remove=function(a){
    return this.u.remove(Ta(a))
    };
    
n.clear=function(){
    this.u.clear()
    };
    
n.hb=function(){
    return this.u.hb()
    };
n.contains=function(a){
    return this.u.q(Ta(a))
    };
    
n.z=function(){
    return this.u.z()
    };
    
n.qa=function(){
    return new Sa(this)
    };
    
n.Ua=function(){
    return this.u.Ua(l)
    };
    
var Ua,Va,Wa,Xa,Ya=function(){
    return p.navigator?p.navigator.userAgent:k
    };
    
Xa=Wa=Va=Ua=l;
var Za;
if(Za=Ya()){
  
    Wa=!Ua&&-1!=Za.indexOf("WebKit");
   
    }
    var ab=Ua,B=Va,bb=Xa,cb=Wa,db;
    a:{
	var eb="",fb;
	if(ab&&p.opera)var gb=p.opera.version,eb="function"==typeof gb?gb():gb;
	else if(bb?fb=/rv\:([^\);]+)(\)|;)/:B?fb=/MSIE\s+([^\);]+)(\)|;)/:cb&&(fb=/WebKit\/(\S+)/),fb)var hb=fb.exec(Ya()),eb=hb?hb[1]:"";
	if(B){
	    var ib,jb=p.document;
	    ib=jb?jb.documentMode:i;
	    if(ib>parseFloat(eb)){
		db=""+ib;
		break a
	    }
	}
	db=eb
    }
    var kb=db,lb={},mb=function(a){
    return lb[a]||(lb[a]=0<=wa(kb,a))
    },nb={},ob=function(){
    return nb[9]||(nb[9]=B&&!!document.documentMode&&9<=document.documentMode)
    };
    
var qb=function(a){
    return pb(a||arguments.callee.caller,[])
    },pb=function(a,b){
    var c=[];
    
return c.join("")
},rb=function(a){
    if(sb[a])return sb[a];
    a=""+a;
    if(!sb[a]){
	var b=/function ([^\(]+)/.exec(a);
	sb[a]=b?b[1]:"[Anonymous]"
	}
	return sb[a]
    },sb={};

var C=function(){};

C.prototype.yc=l;
C.prototype.Ja=function(){
    this.yc||(this.yc=j,this.b())
    };
    
C.prototype.b=function(){
    //this.de&&tb.apply(k,this.de)
    };
    
var D=function(a){
    a&&"function"==typeof a.Ja&&a.Ja()
    },tb=function(a){
    for(var b=0,c=arguments.length;b<c;++b){
	var d=arguments[b];
	//ca(d)?tb.apply(k,d):D(d)
	}
    };
    
var F=function(a,b){
    this.type=a;
    this.currentTarget=this.target=b
    };
    
y(F,C);
F.prototype.b=function(){
    delete this.type;
    delete this.target;
    delete this.currentTarget
    };
    
F.prototype.Ra=l;
F.prototype.Gb=j;
var ub=function(a){
    ub[" "](a);
    return a
    };
    
ub[" "]=function(){};
!B||ob();
var vb=!B||ob();
B&&mb("8");
!cb||mb("528");
bb&&mb("1.9b")||B&&mb("8")||ab&&mb("9.5")||cb&&mb("528");
bb&&!mb("8")||B&&mb("9");
var wb=function(a,b){
    a&&this.Cb(a,b)
    };
    
y(wb,F);
n=wb.prototype;
n.target=k;
n.relatedTarget=k;
n.offsetX=0;
n.offsetY=0;
n.clientX=0;
n.clientY=0;
n.screenX=0;
n.screenY=0;
n.button=0;
n.keyCode=0;
n.charCode=0;
n.ctrlKey=l;
n.altKey=l;
n.shiftKey=l;
n.metaKey=l;
n.Cb=function(a,b){
  
};

n.b=function(){
    wb.A.b.call(this);
    this.relatedTarget=this.currentTarget=this.target=k
    };
    
var xb=function(){},yb=0;
n=xb.prototype;
n.key=0;
n.removed=l;
n.sd=l;
n.Cb=function(a,b,c,d,e,f){
   
    };
    
n.handleEvent=function(a){
    return this.rd?this.Qa.call(this.xb||this.src,a):this.Qa.handleEvent.call(this.Qa,a)
    };
    
var zb={},G={},Ab={},Bb={};Cb=function(a,b,c,d,e){
   
},Db=function(){
    var a=Eb,b=vb?function(c){
	return a.call(b.src,b.key,c)
	}:function(c){
	c=a.call(b.src,b.key,c);
	if(!c)return c
	    };
	    
    return b
    },Fb=function(a,b,c,d,e){
   
    },Hb=function(a){
    
    },Jb=function(a,b,c,d){
  
    },Kb=function(a){

},Gb=function(a,b,c){
    var d=G;
    return b in d&&(d=d[b],c in d&&(d=d[c],a=ha(a),d[a]))?d[a]:k
    },Mb=function(a,b,c,d,e){
    var f=1,b=ha(b);
    if(a[b]){
	a.U--;
	a=a[b];
	a.Hb?a.Hb++:a.Hb=1;
	try{
	    for(var g=a.length,m=0;m<g;m++){
		var o=a[m];
		o&&!o.removed&&(f&=Lb(o,e)!==l)
		}
	    }finally{
	a.Hb--,Jb(c,d,b,a)
	}
    }
return Boolean(f)
},Lb=function(a,b){
    var c=a.handleEvent(b);
    a.sd&&Hb(a.key);
    return c
    },Eb=function(a,b){
};

var Nb=function(){};

y(Nb,C);
n=Nb.prototype;
n.ad=j;
n.ec=k;
n.addEventListener=function(a,b,c,d){
    Cb(this,a,b,c,d)
    };
    
n.removeEventListener=function(a,b,c,d){
    Fb(this,a,b,c,d)
    };
n.dispatchEvent=function(a){
   
    };
    
n.b=function(){
    Nb.A.b.call(this);
    Kb(this);
    this.ec=k
    };
    
var Ob=function(a){
    a=""+a;
    if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))) {
        try{
            
    	return  JSON.parse(a);
    	}catch(b){
             console.log(b);
        }
    }
	h(Error("Invalid JSON string: "+a))
    };

var Pb=function(a){
    this.Lb=a
    };
    
Pb.prototype.H=function(a){
    var b=[];
    Qb(this,a,b);
    return b.join("")
    };
    
var Qb=function(a,b,c){
    switch(typeof b){
	case "string":
	    Rb(b,c);
	    break;
	case "number":
	    c.push(isFinite(b)&&!isNaN(b)?b:"null");
	    break;
	case "boolean":
	    c.push(b);
	    break;
	case "undefined":
	    c.push("null");
	    break;
	case "object":
	    if(b==k){
	    c.push("null");
	    break
	}
	if(t(b)){
	    var d=b.length;
	    c.push("[");
	    for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Qb(a,a.Lb?a.Lb.call(b,""+f,e):e,c),e=",";
	    c.push("]");
	    break
	}
	c.push("{");
	    d="";
	    for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Rb(f,c),c.push(":"),
	    Qb(a,a.Lb?a.Lb.call(b,f,e):e,c),d=","));c.push("}");
	    break;
	case "function":
	    break;
	default:
	    h(Error("Unknown type: "+typeof b))
	    }
	};
var Sb={
    '"':'\\"',
    "\\":"\\\\",
    "/":"\\/",
    "\u0008":"\\b",
    "\u000c":"\\f",
    "\n":"\\n",
    "\r":"\\r",
    "\t":"\\t",
    "\x0B":"\\u000b"
};
var Tb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Rb=function(a,b){b.push('"',a.replace(Tb,function(a){if(a in Sb)return Sb[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Sb[a]=e+b.toString(16)}), '"')};

var Vb=function(a,b){
    this.fb=a||1;
    this.bb=b||Ub;
    this.vc=v(this.Ud,this);
    this.wc=x()
    };
    
y(Vb,Nb);
Vb.prototype.enabled=l;
var Ub=p.window;
n=Vb.prototype;
n.I=k;
n.setInterval=function(a){
    this.fb=a;
    this.I&&this.enabled?(this.stop(),this.start()):this.I&&this.stop()
    };
    
n.Ud=function(){
    if(this.enabled){
	var a=x()-this.wc;
	//0<a&&a<0.8*this.fb?this.I=this.bb.setTimeout(function() {this.vc;},this.fb-a):(this.dispatchEvent("tick"),this.enabled&&(this.I=this.bb.setTimeout(function() {this.vc;},this.fb),this.wc=x()))
	}
    };
n.start=function(){
    this.enabled=j;
    this.I||(this.I=this.bb.setTimeout(function() {this.vc;},this.fb),this.wc=x())
    };
    
n.stop=function(){
    this.enabled=l;
    this.I&&(this.bb.clearTimeout(this.I),this.I=k)
    };
    
n.b=function(){
    Vb.A.b.call(this);
    this.stop();
    delete this.bb
    };
    
var H=function(a,b,c){
    da(a)?c&&(a=v(a,c)):a&&"function"==typeof a.handleEvent?a=v(a.handleEvent,a):h(Error("Invalid listener argument"));
    return 2147483647<b?-1:Ub.setTimeout(a,b||0)
    },I=function(a){
    Ub.clearTimeout(a)
    };
    
var Wb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),Yb=function(a){
    if(Xb){
	Xb=l;
	var b=p.location;
	if(b){
	    var c=b.href;
	    if(c&&(c=(c=Yb(c)[3]||k)&&decodeURIComponent(c))&&c!=b.hostname)Xb=j,h(Error())
		}
	    }
    return a.match(Wb)
},Xb=cb;
var J=function(a){
    this.ld=a;
    this.p=[]
    };
    
y(J,C);
var Zb=[],K=function(a,b,c,d,e,f){
    t(c)||(Zb[0]=c,c=Zb);
    for(var g=0;g<c.length;g++)a.p.push(Cb(b,c[g],d||a,e||l,f||a.ld||a))
	},ac=function(a,b,c,d,e,f){
    if(t(c))for(var g=0;g<c.length;g++)ac(a,b,c[g],d,e,f);
    else{
	a:{
	    d=d||a;
	    f=f||a.ld||a;
	    e=!!e;
	    if(b=Gb(b,c,e))for(c=0;c<b.length;c++)if(!b[c].removed&&b[c].Qa==d&&b[c].capture==e&&b[c].xb==f){
		b=b[c];
		break a
	    }
	    b=k
	    }
	    b&&(b=b.key,Hb(b),a=a.p,b=ya(a,b),0<=b&&xa.splice.call(a,b,1))
	}
    };
J.prototype.removeAll=function(){
    za(this.p,Hb);
    this.p.length=0
    };
    
J.prototype.b=function(){
    J.A.b.call(this);
    this.removeAll()
    };
    
J.prototype.handleEvent=function(){
    h(Error("EventHandler.handleEvent not implemented"))
    };
    
var bc=function(){
    J.call(this);
    this.ed=k;
    K(this,this.ed,la.Ae.Be.Ce,this.Wd)
    };
    
y(bc,J);
bc.prototype.b=function(){
    D(this.ed);
    bc.A.b.call(this)
    };
bc.prototype.Wd=function(a){
    if(a=a.error){
	var b;
 
	    //window.console&&(window.console.error?window.console.error(b):window.console.log&&window.console.log(b))
	}
    };

var cc=function(a,b){
    s(a)&&(b?a=chrome.extension.getURL("images/"+a):0==a.indexOf("images/")&&(a=chrome.extension.getURL(a)));
    return a
    },dc=function(a){
    a&&a!=chrome.windows.WINDOW_ID_NONE&&chrome.windows.update(a,{
	focused:j
    })
    },fc=function(a,b){
    s(a)&&(window.open(a,"winid_"+(new Date).getTime(),b),H(v(ec,k,a),1E3))
    },ec=function(a){
    chrome.windows.getAll({
	populate:j
    },function(b){
	for(var c=0;c<b.length;++c){
	    var d=b[c].tabs;
	    if(s(d))for(var e=0;e<d.length;++e)if(d[e].selected&&d[e].url==a){
		dc(b[c].id);
		return
	    }
	    }
	    })
},
gc=function(a,b,c){
    for(var d=0;d<c.length;++d){
	var e=c[d],f=e.tabs;
	if(f)for(var g=0;g<f.length;++g)f[g].url.match(a)&&b(e.id)
	    }
	};
    
var hc,ic,jc,kc,lc,mc,nc;
nc=mc=lc=kc=jc=ic=hc=l;
var oc=Ya();
oc&&(-1!=oc.indexOf("Firefox")?hc=j:-1!=oc.indexOf("Camino")?ic=j:-1!=oc.indexOf("iPhone")||-1!=oc.indexOf("iPod")?jc=j:-1!=oc.indexOf("iPad")?kc=j:-1!=oc.indexOf("Android")?lc=j:-1!=oc.indexOf("Chrome")?mc=j:-1!=oc.indexOf("Safari")&&(nc=j));
var pc=hc,qc=ic,rc=jc,sc=kc,tc=lc,uc=mc,vc=nc;
var wc=function(a){
    return(a=a.exec(Ya()))?a[1]:""
    },xc=function(){
    if(pc)return wc(/Firefox\/([0-9.]+)/);
    if(B||ab)return kb;
    if(uc)return wc(/Chrome\/([0-9.]+)/);
    if(vc)return wc(/Version\/([0-9.]+)/);
    if(rc||sc){
	var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Ya());
	if(a)return a[1]+"."+a[2]
	    }else{
	if(tc)return(a=wc(/Android\s+([0-9.]+)/))?a:wc(/Version\/([0-9.]+)/);
	if(qc)return wc(/Camino\/([0-9.]+)/)
	    }
	    return""
    }();
var yc=function(a){
    var b=[];
    s(a)&&(b=a.split("_;_"));
    if(2>b.length)for(var a=2-b.length,c=0;c<a;++c)b.push("");
    return b
    },zc=function(a,b){
    for(var c=[],d=0;d<arguments.length;d++)c.push(arguments[d]||"");
    return c.join("_;_")
    },Cc=function(){
    return navigator.platform.match(/Win.*/)!=k||Ac()||Bc()
    },Ac=function(){
    return!Dc()&&navigator.platform.match(/Linux.*/)!=k
    },Bc=function(){
    return navigator.platform.match(/Mac.*/)!=k
    },Dc=function(){
    return 0<=navigator.userAgent.indexOf("CrOS")
    };
    
try{
    var L=window.localStorage
    }catch(Ec){
    L=k
    }
    try{
    var Fc=window.sessionStorage
    }catch(Gc){
    Fc=k
    }
    var Hc=function(a,b){
    if(s(b)){
	try{
	    var c=b.getItem(a)
	    }catch(d){
	    return k
	    }
	    if(s(c))return Ob(c).data
	    }
	    return k
    },Ic=function(a){
    return Hc(a,L)==k?l:j
    },Jc=function(a,b){
    var c=L;
    if(s(c)){
	var d={
	    data:b,
	    timestamp:(new Date).getTime()
	    };
	    
	try{
	    c.setItem(a,(new Pb(i)).H(d))
	    }catch(e){}
    }
};

var M=function(a,b){
    this.Ga=a||"e";
    this.Fa=s(a)&&"p"==a?"e":"p";
    this.Sa=this.Ta=k;
    this.ob=b||"u";
    this.za=this.Ha=k;
    this.Fb=[]
    };
    
M.prototype.message=function(){
    var a={};
    
    a.i=this.za;
    a.m=this.Fb;
    a.r=this.ob;
    a.o=this.Ha;
    a.s=this.Sa;
    a.st=this.Fa;
    a.d=this.Ta;
    a.dt=this.Ga;
    return a
    };
    
r("ace.base.Message.prototype.message",M.prototype.message,i);
M.prototype.parse=function(a){
    for(var b in a)switch(b){
	case "r":
	    this.ob=a[b];
	    break;
	case "i":
	    this.za=a[b];
	    break;
	case "m":
	    this.Fb=a[b];
	    break;
	case "o":
	    this.Ha=a[b];
	    break;
	case "s":
	    this.Sa=a[b];
	    break;
	case "d":
	    this.Ta=a[b];
	    break;
	case "st":
	    this.Fa=a[b];
	    break;
	case "dt":
	    this.Ga=a[b]
	    }
	    return this
    };
    
M.prototype.H=function(){
    var a=this.message();
    return(new Pb(i)).H(a)
    };
var Kc=function(a){
    var b=a.Sa;
    a.Sa=a.Ta;
    a.Ta=b;
    b=a.Fa;
    a.Fa=a.Ga;
    a.Ga=b
    },Lc=function(a){
    s("")&&(a.Sa="",s("e")&&(a.Fa="e"))
    },Mc=function(a,b){
    s(b)&&(a.Ta=b,s(i)&&(a.Ga=i))
    },Nc=function(a){
    s("u")&&(a.ob="u")
    },Oc=function(a,b){
    s(b)&&(a.za=b)
    },Pc=function(a,b){
    a.Fb="object"==typeof b?b:[b]
    };
    
M.prototype.source=function(){
    return this.Sa
    };
    
M.prototype.target=function(){
    return this.Ta
    };
    
M.prototype.content=function(){
    return this.Fb
    };
    
var Qc=function(a,b){
    var c;
    a instanceof Qc?(this.Ma(b==k?a.ba:b),Rc(this,a.$),Tc(this,a.va),Uc(this,a.Z),Vc(this,a.c()),Wc(this,a.T),Xc(this,a.R.qa()),Yc(this,a.pa)):a&&(c=Yb(""+a))?(this.Ma(!!b),Rc(this,c[1]||"",j),Tc(this,c[2]||"",j),Uc(this,c[3]||"",j),Vc(this,c[4]),Wc(this,c[5]||"",j),Xc(this,c[6]||"",j),Yc(this,c[7]||"",j)):(this.Ma(!!b),this.R=new Zc(k,this,this.ba))
    };
    
n=Qc.prototype;
n.$="";
n.va="";
n.Z="";
n.B=k;
n.T="";
n.pa="";
n.he=l;
n.ba=l;
n.toString=function(){
    if(this.W)return this.W;
    var a=[];
    this.$&&a.push($c(this.$,ad),":");
    this.Z&&(a.push("//"),this.va&&a.push($c(this.va,ad),"@"),a.push(u(this.Z)?encodeURIComponent(this.Z):k),this.B!=k&&a.push(":",""+this.c()));
    this.T&&(this.Z&&"/"!=this.T.charAt(0)&&a.push("/"),a.push($c(this.T,"/"==this.T.charAt(0)?bd:cd)));
    var b=""+this.R;
    b&&a.push("?",b);
    this.pa&&a.push("#",$c(this.pa,dd));
    return this.W=a.join("")
    };
n.qa=function(){
    var a=this.$,b=this.va,c=this.Z,d=this.B,e=this.T,f=this.R.qa(),g=this.pa,m=new Qc(k,this.ba);
    a&&Rc(m,a);
    b&&Tc(m,b);
    c&&Uc(m,c);
    d&&Vc(m,d);
    e&&Wc(m,e);
    f&&Xc(m,f);
    g&&Yc(m,g);
    return m
    };
    
var Rc=function(a,b,c){
    ed(a);
    delete a.W;
    a.$=c?b?decodeURIComponent(b):"":b;
    a.$&&(a.$=a.$.replace(/:$/,""))
    },Tc=function(a,b,c){
    ed(a);
    delete a.W;
    a.va=c?b?decodeURIComponent(b):"":b
    },Uc=function(a,b,c){
    ed(a);
    delete a.W;
    a.Z=c?b?decodeURIComponent(b):"":b
    };
    
Qc.prototype.c=function(){
    return this.B
    };
var Vc=function(a,b){
    ed(a);
    delete a.W;
    b?(b=Number(b),(isNaN(b)||0>b)&&h(Error("Bad port number "+b)),a.B=b):a.B=k
    },Wc=function(a,b,c){
    ed(a);
    delete a.W;
    a.T=c?b?decodeURIComponent(b):"":b
    },Xc=function(a,b,c){
    ed(a);
    delete a.W;
    b instanceof Zc?(a.R=b,a.R.rc=a,a.R.Ma(a.ba)):(c||(b=$c(b,fd)),a.R=new Zc(b,a,a.ba))
    },gd=function(a,b,c){
    ed(a);
    delete a.W;
    a.R.set(b,c);
    return a
    },Yc=function(a,b,c){
    ed(a);
    delete a.W;
    a.pa=c?b?decodeURIComponent(b):"":b
    },ed=function(a){
    a.he&&h(Error("Tried to modify a read-only Uri"))
    };
Qc.prototype.Ma=function(a){
    this.ba=a;
    this.R&&this.R.Ma(a);
    return this
    };
var hd=/^[a-zA-Z0-9\-_.!~*'():\/;?]*$/,$c=function(a,b){
    var c=k;
    u(a)&&(c=a,hd.test(c)||(c=encodeURI(a)),0<=c.search(b)&&(c=c.replace(b,id)));
    return c
    },id=function(a){
    a=a.charCodeAt(0);
    return"%"+(a>>4&15).toString(16)+(a&15).toString(16)
    },ad=/[#\/\?@]/g,cd=/[\#\?:]/g,bd=/[\#\?]/g,fd=/[\#\?@]/g,dd=/#/g,Zc=function(a,b,c){
    this.ka=a||k;
    this.rc=b||k;
    this.ba=!!c
    },kd=function(a){
    if(!a.n&&(a.n=new A,a.e=0,a.ka))for(var b=a.ka.split("&"),c=0;c<b.length;c++){
	var d=b[c].indexOf("="),e=k,f=k;
	0<=d?(e=b[c].substring(0,
	    d),f=b[c].substring(d+1)):e=b[c];
	e=decodeURIComponent(e.replace(/\+/g," "));
	e=jd(a,e);
	a.add(e,f?decodeURIComponent(f.replace(/\+/g," ")):"")
	}
    };
    
n=Zc.prototype;
n.n=k;
n.e=k;
n.Ka=function(){
    kd(this);
    return this.e
    };
    
n.add=function(a,b){
    kd(this);
    ld(this);
    a=jd(this,a);
    if(this.q(a)){
	var c=this.n.get(a);
	t(c)?c.push(b):this.n.set(a,[c,b])
	}else this.n.set(a,b);
    this.e++;
    return this
    };
    
n.remove=function(a){
    kd(this);
    a=jd(this,a);
    if(this.n.q(a)){
	ld(this);
	var b=this.n.get(a);
	t(b)?this.e-=b.length:this.e--;
	return this.n.remove(a)
	}
	return l
    };
n.clear=function(){
    ld(this);
    this.n&&this.n.clear();
    this.e=0
    };
    
n.hb=function(){
    kd(this);
    return 0==this.e
    };
    
n.q=function(a){
    kd(this);
    a=jd(this,a);
    return this.n.q(a)
    };
    
n.Y=function(){
    kd(this);
    for(var a=this.n.z(),b=this.n.Y(),c=[],d=0;d<b.length;d++){
	var e=a[d];
	if(t(e))for(var f=0;f<e.length;f++)c.push(b[d]);else c.push(b[d])
	    }
	    return c
    };
n.z=function(a){
    kd(this);
    if(a)if(a=jd(this,a),this.q(a)){
	var b=this.n.get(a);
	if(t(b))return b;
	a=[];
	a.push(b)
	}else a=[];else for(var b=this.n.z(),a=[],c=0;c<b.length;c++){
	var d=b[c];
	t(d)?Ca(a,d):a.push(d)
	}
	return a
    };
    
n.set=function(a,b){
    kd(this);
    ld(this);
    a=jd(this,a);
    if(this.q(a)){
	var c=this.n.get(a);
	t(c)?this.e-=c.length:this.e--
    }
    this.n.set(a,b);
    this.e++;
    return this
    };
    
n.get=function(a,b){
    kd(this);
    a=jd(this,a);
    if(this.q(a)){
	var c=this.n.get(a);
	return t(c)?c[0]:c
	}
	return b
    };
n.toString=function(){
    if(this.ka)return this.ka;
    if(!this.n)return"";
    for(var a=[],b=0,c=this.n.Y(),d=0;d<c.length;d++){
	var e=c[d],f=pa(e),e=this.n.get(e);
	if(t(e))for(var g=0;g<e.length;g++)0<b&&a.push("&"),a.push(f),""!==e[g]&&a.push("=",pa(e[g])),b++;else 0<b&&a.push("&"),a.push(f),""!==e&&a.push("=",pa(e)),b++
    }
    return this.ka=a.join("")
    };
    
var ld=function(a){
    delete a.Ea;
    delete a.ka;
    a.rc&&delete a.rc.W
    };
Zc.prototype.qa=function(){
    var a=new Zc;
    this.Ea&&(a.Ea=this.Ea);
    this.ka&&(a.ka=this.ka);
    this.n&&(a.n=this.n.qa());
    return a
    };
    
var jd=function(a,b){
    var c=""+b;
    a.ba&&(c=c.toLowerCase());
    return c
    };
    
Zc.prototype.Ma=function(a){
    a&&!this.ba&&(kd(this),ld(this),Pa(this.n,function(a,c){
	var d=c.toLowerCase();
	c!=d&&(this.remove(c),this.add(d,a))
	},this));
    this.ba=a
    };
    
var N=function(a,b){
 
    };
    
var md=function(a){
    this.k=a||"";
    this.Pb=0;
    this.oa=this.ua=this.L=this.mb=this.Ia=k;
    this.M=this.Jc=0;
    this.Vb=l;
    this.ub=[];
    this.Zb=l;
    this.sb=k;
    this.Yb=l;
    this.fa=k;
    this.Dc=l
    },nd=function(a,b,c,d,e){
    this.L=a||k;
    this.Ia=b?cc(b):k;
    this.Sd=c||k;
    this.Rd=d==l?l:j;
    this.pd=e||k
    };
    
nd.prototype.Uc=function(){
    return this.L
    };
    
nd.prototype.Tc=function(){
    return this.Ia
    };
    
nd.prototype.getName=function(){
    return this.pd
    };
    
nd.prototype.H=function(){
    return[this.L,this.Ia,this.Sd,this.Rd,this.pd]
    };
    
n=md.prototype;
n.tb=function(a){
    this.k=a
    };
    
n.j=function(){
    return this.k
    };
    
n.setIcon=function(a){
    this.Ia=a?cc(a):k
    };
    
n.Tc=function(){
    return this.Ia
    };
    
n.setTitle=function(a){
    this.L=a
    };
n.Uc=function(){
   
    };
var od=function(a,b){
    s(a.oa)&&a.Jc++;
    a.oa=b
    },pd=function(a,b,c,d,e,f){
    a.ub[a.ub.length]=new nd(b,c,d,e,f)
    };
    
md.prototype.type=function(){
    return 0==this.k.indexOf("missedchat")?6:0<this.k.indexOf("chat")||qd(this)?2:0<this.k.indexOf("calendar")?3:0==this.k.indexOf("sms")?5:0==this.k.indexOf("email")?1:0==this.k.indexOf("hangout")?7:8
    };
    
var rd=function(a){
    var b=k;
    if(2==a.type()||7==a.type())a=a.k.split(";"),2<=a.length&&(b=a[1].split("/")[0]);
    return b
    };
md.prototype.$b=function(a){
    return qd(this)||a.j()!=this.k?l:s(this.$a)?this.$a==a.$a:this.oa==a.oa
    };
    
var sd=function(a){
    if(qd(a))return k;
    var b=a.j();
    s(a.$a)?b+=a.$a:s(a.oa)&&(b+=a.oa);
    return b
    };
    
md.prototype.ea=function(a){
    return this.k==a.j()||1==a.type()&&1==this.type()||3==a.type()&&3==this.type()||6==a.type()&&6==this.type()
    };
md.prototype.H=function(){
    var a={};
    
    a.allowTimeout=this.Vb;
    a.id=this.k;
    a.icon=this.Ia;
    a.title=this.L;
    a.summary=this.mb;
    a.detail=this.oa;
    a.old=this.Jc;
    a.expire=this.M;
    a.is_meeting=this.Zb;
    a.meeting_name=this.sb;
    a.is_groupchat=this.Yb;
    a.recycled=this.Dc;
    a.read=this.fa;
    for(var b=[],c=0;c<this.ub.length;c++)b.push(this.ub[c].H());
    a.buttons=b;
    return a
    };
    
var qd=function(a){
    return 0<=a.k.indexOf("voice")||0<=a.k.indexOf("video")
    };
    
var O=function(a,b,c,d,e){
    this.k=a;
    this.t=b;
    this.xa=typeof b;
    this.wd=c?c:l;
    this.ga=j;
    this.vd=d?d:l;
    this.Nc=e?e:l
    };
    
y(O,C);
O.prototype.b=function(){
    O.A.b.call(this);
    this.k="";
    this.t=k;
    this.xa=""
    };
    
O.prototype.id=function(){
    return this.k
    };
    
O.prototype.type=function(){
    return this.xa
    };
    
O.prototype.setEnabled=function(a){
    this.ga=a
    };
    
var ud=function(a){
    this.v=new A;
     a&&td(this,a)
    };
    
y(ud,C);
var vd=0<=wa(xc,17)&&!Dc()||0<=wa(xc,19);
ud.prototype.b=function(){
    ud.A.b.call(this);
    for(var a=this.v.Y(),b=0;b<a.length;++b)D(this.v.get(a[b]));
    delete this.v
    };
ud.prototype.getItem=function(a){
    return this.v.q(a)?this.v.get(a):k
    };
    
ud.prototype.setItem=function(a){
    this.v.set(a.id(),a)
    };
    
var td=function(a,b){
 
    };
ud.prototype.H=function(){
    for(var a=this.v.Y(),b={},c=0;c<a.length;c++){
	var d=a[c],e=this.v.get(d);
	b[d]={
	    value:e.t,
	    type:e.type(),
	    multiple:e.wd,
	    disabled:!e.ga,
	    inverse:e.vd,
	    changed:e.Nc
	    }
	}
    return b
};

var xd=function(a){
    return Dc()?l:!wd(a)
    },yd=function(){
    var a=P().v.get("EmailNotificationEnabled");
    return a?a.t:l
    },wd=function(a){
    return!vd?l:(a=a.v.get("ChromePanels"))&&a.ga?a.t:Dc()
    };
    
var zd=function(a){
 
    };
    
y(zd,C);
n=zd.prototype;
n.b=function(){
    zd.A.b.call(this);
    this.terminate()
    };
    
n.j=function(){
    return this.k
    };
    
n.tb=function(a){
    this.k=a
    };
    
n.getName=function(){
    return yc(this.k)[0]
    };
    
n.c=function(){
    return this.B
    };
    
n.sendMessage=function(a){
    return!s(a)||!s(a.message)?l:this.B&&this.Da?(this.B.postMessage(a.message()),j):l
    };
n.da=function(a){
 
    };
n.Bd=function(a){
    };
n.terminate=function(){

};

var Hd=function(){
    this.a=k;
    this.C={}
},R;
y(Hd,Nb);
Hd.prototype.da=function(){

 
};
var Id=function(a,b,c,d){
    var e=new M("c");
    Lc(e);
    Oc(e,"extensionInfo");
    var f={};
    
    b?f[b]=c:(f.UserId=Hc("user_id",L),f.chatNoticificationEnabled=xd(P()));
    Pc(e,f);
    d?(Nc(e),Bd(d,e)):(b=Sd(a,"client"),b=b.concat(Sd(a,"talk")),Cd(b,e))
    };
    
Hd.prototype.c=function(a){
    return s(a)?this.C[a]:k
    };
var Td=function(a){
    var b=R,c=[],d;
    for(d in b.C)b.c(d).getName()==a&&c.push(d);return c
    },Sd=function(a,b){

    },Gd=function(a){
    var b=R,c=0,d;
    for(d in b.C)b.c(d).getName()==a&&c++;return c
    },Bd=function(a,b){
    s(a)&&a.Da&&(Mc(b,a.j()),a.sendMessage(b))
    },Cd=function(a,b){
    for(var c in a){
	var d=a[c];
	s(d)&&d.Da&&(Mc(b,d.j()),d.sendMessage(b))
	}
    };
Hd.prototype.ha=function(a,b,c){
    if(s(a)&&s(b)&&s(c)&&!(1>c.length)){
	Nc(b);
	Oc(b,a);
	var a=[],d;
	for(d in c)this.c(c[d])&&a.push(this.c(c[d]));Cd(a,b)
	}
    };

var Dd=function(a,b,c){
    var d=yc(b),e=[],f;
    for(f in a.C){
	var g=a.c(f);
	g.getName()==d[0]&&e.push(g)
	}
	e.length&&(a=new M("p"),Nc(a),Lc(a),Oc(a,c),Pc(a,[e.length,b]),Cd(e,a))
    },Ud=function(a,b){
    F.call(this,a);
    this.message=b
    };
    
y(Ud,F);
var Vd=function(){
    this.w=new ud;
    this.da()
    };
    
r("ace.core.SettingsManager",Vd,i);
var Wd=chrome.extension.getURL("settingsdialog.html");
var P=function(){
    var a=Q(R.a,"settingsManager");
    return a?a.w:k
    };


Vd.prototype.da=function(){
    var a=Dc();
 
   
    this.w.setItem(new O("StartOnBrowserLaunch",j,l,l));
 
    vd&&this.w.setItem(new O("ChromePanels",
	j,l,l));
  
    a=new O("StopOnBrowserClose",l,l,l);
    a.setEnabled(l);
    this.w.setItem(a);
    a=new O("TrayIcon",j,l,l);
    a.setEnabled(Cc());
    this.w.setItem(a);
    (a=Hc("settings",L))&&td(this.w,a);
    a=this.w.H();
    Jc("settings",a)
    };
Vd.prototype.ve=function(){

    };
    
Vd.prototype.updateSettingsFromStorage=Vd.prototype.ve;
Vd.prototype.Hc=function(){
    var a=Td("setting");
    if(a)for(var b=0;b<a.length;++b)Zd(a[b],"close")
	};
	
Vd.prototype.closeUI=Vd.prototype.Hc;
var Zd=function(a,b){
    var c=new M;
    Oc(c,b);
    Pc(c,[]);
    R.c(a).sendMessage(c)
    };
    

var ae=function(a,b){
   
    };
    
var ce=function(a,b){
  
    },be={
   
},ee=function(a,b,c){
    return de(document,arguments)
    },de=function(a,b){

    },fe=function(a,b,c){
 
    },ge=function(a){
  
    },he=function(a){
    this.K=a||p.document||document
    };
    
n=he.prototype;
n.Ad=function(a,b,c){
    return de(this.K,arguments)
    };
    
n.createElement=function(a){
    return this.K.createElement(a)
    };
    
n.createTextNode=function(a){
    return this.K.createTextNode(a)
    };
    
n.appendChild=function(a,b){
    a.appendChild(b)
    };
n.contains=function(a,b){
    if(a.contains&&1==b.nodeType)return a==b||a.contains(b);
    if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);
    for(;b&&a!=b;)b=b.parentNode;
    return b==a
    };
    
var me=function(){
    J.call(this);
    this.k=zc("viewer",""+(new Date).getTime());
    this.Q=k;
    this.P=new he(ie);
    this.la=R;
    this.Ba=je();
    this.Va=j;
    var a=this.P.K.parentWindow||this.P.K.defaultView;
    this.Va?ke(this.Ba,"s_l",this,this.lb):K(this,a,"beforeunload",le);
    K(this,a,"unload",this.Ja)
    console.log(a);
    };

var ne;

y(me,J);

var oe=function(){
    if(!q(ne)||ne==k||ne.yc)ne=new me;
    return ne
    };
me.prototype.b=function(){
    this.removeAll();
    this.S&&(I(this.S),this.S=k);
    if(this.Va){
	var a=this.Ba;
	ac(a.ra,a,"s_l",this.lb,l,this)
	}
	ie=k;
    this.la.a.ac();
    me.A.b.call(this)
    };
    
me.prototype.lb=function(){
    this.Q&&(this.P.K.body.removeChild(this.Q),this.Q=k);
    pe(this)
    };
    
var ie=k;
me.prototype.da=function(){

	};
var re=function(a){
  
    };
    
n=me.prototype;
n.ud=function(){
    this.Gc++;
    1<this.Gc&&qe()
    };
n.Cd=function(a){
    a=a.message.content()[0];
    3==a?s(this.Q)||re(this):this.Va?2==a?this.lb():this.F||this.Pa():s(this.Q)&&this.Pa()
    };
n.Pa=function(){

	};
n.Xc=function(){

    };
    
n.$c=function(){

    };
var pe=function(a){

    };
var le=function(){

    };
    
var se=function(a,b,c,d){
    this.left=a;
    this.top=b;
    this.width=c;
    this.height=d
    };
    
se.prototype.qa=function(){
    return new se(this.left,this.top,this.width,this.height)
    };
    
se.prototype.contains=function(a){
    return a instanceof se?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height
    };
    
var T=function(){
    this.h={};
    
    this.Ib={};
    
    this.hc=v(this.kd,this);
  //  chrome.windows.onRemoved.addListener(this.hc);
    var a=v(this.Jd,this);
    r("__onPanelReady",a,i)
    };
    
y(T,C);
r("ace.core.PanelsManager",T,i);
T.prototype.b=function(){
    for(var a in this.h){
	var b=this.h[a];
	"number"==typeof b.yb&&I(b.yb);
	delete this.h[a]
    }
  // chrome.windows.onRemoved.removeListener(this.hc);
    delete this.hc;
    T.A.b.call(this)
    };
T.prototype.me=function(a,b,c,d,e,f,g){
 
    };
    
T.prototype.openPanel=T.prototype.me;
T.prototype.nd=function(a,b,c,d){
    var b=b+("?"+a),e=cc("icon-24x24.png",j),f=cc("icon-48x48.png",j),g=this.h,b={
	id:a,
	url:b,
	title:c,
	tc:e,
	sc:f,
	width:d.width,
	height:d.height,
	gd:v(this.Ld,this,a)
	};
	
    g[a]=b;
    CreatePanel(this,a,j,d)
    };
    
T.prototype.openViewer=T.prototype.nd;
T.prototype.pc=function(a,b){
    var c=this.Jb(b);
    q(c)&&chrome.windows.remove(c)
    };
    
T.prototype.closePanel=T.prototype.pc;
T.prototype.be=function(){

	};
T.prototype.closeAllPanels=T.prototype.be;
T.prototype.setTitle=function(a,b,c){
    this.h[b]&&(this.h[b].title=c,ue(this,this.h[b]))
    };
    
T.prototype.setTitle=T.prototype.setTitle;
T.prototype.eb=function(a,b,c){
    this.h[b]&&(this.h[b].eb=c,ue(this,this.h[b]))
    };
    
T.prototype.drawAttention=T.prototype.eb;
T.prototype.se=function(a,b,c){
    this.h[b]&&(this.h[b].tc=c,ue(this,this.h[b]))
    };
    
T.prototype.setPresence=T.prototype.se;
T.prototype.qe=function(a,b,c){
    this.h[b]&&(this.h[b].sc=c,ue(this,this.h[b]))
    };
T.prototype.setAvatar=T.prototype.qe;
T.prototype.$d=function(a,b,c){
   
    };
    
T.prototype.adjustHeight=T.prototype.$d;
T.prototype.Cc=function(a,b){
    for(var c in this.h)this.qd(0,c,b)
	};
	
T.prototype.minimizeAllPanels=T.prototype.Cc;
T.prototype.qd=function(a,b,c){
 
};

T.prototype.minimizePanel=T.prototype.qd;


var CreatePanel=function(objeto,url,enfocado,dimensiones){
    var extensionurl=objeto.h[url].url;
    
 
    if(wd(P())){
    	"panelttb.html"==url&&(dimensiones.height=alto);
	   var nuevaventana={type:"popup",         
                        focused:enfocado,
                        top:dimensiones.top,
                        left:dimensiones.left,
                        width:dimensiones.width,
                        height:dimensiones.height,
                        url:extensionurl};

    	chrome.windows.create(nuevaventana,v(function(a){ if(objeto) {
                                                                objeto.type!="popup" && dimensiones && chrome.windows.update(objeto.id,{
                                                        		top:dimensiones.top,
                                                        		left:dimensiones.left,
                                                        		width:dimensiones.width,
                                                        		height:dimensiones.height
                                                        		});
                                                        } else {
                                                             we(extensionurl,dimensiones);
                                                        }},objeto));
    }  else {
            we(extensionurl,dimensiones);
    }
    // console.log('Deteccion',objeto,url,enfocado,dimensiones,extensionurl);
};

var xe=function(){
   // return chrome.extension.getBackgroundPage().frames.centralRoster.contentWindow
    };
var we=function(extensionurl,dimensiones){
    var c="",d;
    for(d in dimensiones)"number"==
	typeof dimensiones[d]&&(c+=d+"="+dimensiones[d]+",");//xe().open(extensionurl,"",c)
    };
   
T.prototype.Jd=function(a,b){
    var c=a.location.search.substring(1),d=this.h[c];
    d&&((d.windowId=b,this.Ib[b]=c,"number"==typeof d.yb&&(I(d.yb),delete d.yb),ue(this,d,a),a.opener)?d.gd.call(this,a):(c="qpanel"+Math.random(),a.name=c,xe().open(d.url,c)))
    };
    
T.prototype.kd=function(a){
    var b=this.h[this.Ib[a]];
    b&&b.windowId==a&&delete this.h[this.Ib[a]];
    delete this.Ib[a]
};
T.prototype.Kd=function(a,b,c){
 
    };
    
T.prototype.Ld=function(a,b){
    ie=b.document;
    oe().da();
    var c=this.h[a].windowId;
    oe().la.a.jc(c)
    };
var ue=function(a,b,c){
 
    };
var ve=function(a,b){
    //console.log('Deteccion',a,b);
    H(function(){
	chrome.windows.update(b,{
	    width:a.width,
	    height:a.height
	    })
	},100)
    };
    
T.prototype.Jb=function(a){    };

var ye=function(a){
    console.log('yeye',a);
   chrome.tabs.onRemoved.addListener(function(info) {
    	chrome.extension.getBackgroundPage(). sremoveItem('viewerWindowId');
			 chrome.extension.getBackgroundPage(). sremoveItem('viewerTabId');
    });
}
 
var Ae=function(a,b,c){	};
	
var Be=function(a,b,c){    };
    
Be.prototype.get=function(a){   };
    
var De=function(){    };
    
r("ace.core.ClientManager",De,i);
De.prototype.te=function(a,b){};

De.prototype.updateClientInfo=De.prototype.te;
var Ee=function(){
    this.ra=new J
    };
    
y(Ee,Nb);
var Fe=k,je=function(){
    Fe||(Fe=new Ee);
    return Fe
    },Ge=function(a,b){
    F.call(this,a);
    this.data=s(b)?b:k
    };
    
y(Ge,F);
Ee.prototype.ha=function(a,b){
   
    };
    
var ke=function(a,b,c,d){
    K(a.ra,a,b,d,l,c)
    };
    
Ee.prototype.b=function(){
    D(this.ra);
    Ee.A.b.call(this);
    Fe=k
    };
    
var V=function(){

    };
    
r("ace.core.DesktopManager",V,i);
V.prototype.na=function(a,b){
    	if(e=Cc()) {
                e=P().v.get("TrayIcon");
            	e&&Xd(this);
	}
    };

V.prototype.changeDesktop=V.prototype.na;
V.prototype.hd=function(){
    return this.l
    };
    
var Xd=function(a){
    if(!a.V){
	var b=W.J;
	b&&!b.hasTrayIcon()&&b.createTrayIcon(Me("offline"));
	a.V=j;

	    }
	};
Yd=function(a){    };
    Ke=function(a){    };
    Je=function(a){    };
    U=function(a){   };
    He=function(a){    };
    
V.prototype.Xb=function(){

    };
    
V.prototype.clearBadgeText=V.prototype.Xb;
V.prototype.setBadgeText=function(a,b){

    };
    
    var Me=function(){
   
    var ArrayPath=["images/",'icon',"-","24x24"];
    navigator.platform.match(/Win.*/)!=
    k?ArrayPath.push(".ico"):Ac()?ArrayPath.push(".png"):Bc()&&ArrayPath.shift();
    var retorno=ArrayPath.join("");
	
	return retorno;
    };
    





var Re=function(){    },Se=k,Ne=function(){   },Jd=function(a,b){},Ed=function(a,b){},Te=function(a){    };
    
Re.prototype.bd=function(a){
    
    };
    
var Ve=function(a,b){
  
    };
    
Re.prototype.bd=function(a){
    return this.zb.q(a)
    };
var Xe=function(a,b){
  
    },We=function(a){
   
    };
    
Re.prototype.oc=function(a,b){
  
    };

var Ze=function(){
  
    };
    
y(Ze,C);
var $e={
   
};

Ze.prototype.b=function(){
   
    };
    
var Od=function(a,b){
 
	},af=function(a,b){
    
    };
    
var Nd=function(a,b){
    
    };
    
y(Nd,C);
Nd.prototype.Vc=function(){
    return this.xa
    };
    
Nd.prototype.ea=function(a){
    return s(a)&&0<this.O.length?this.O[0].ea(a):l
    };
    
Nd.prototype.Vc=function(){
    return this.xa
    };
    
var Rd=function(a,b){
    
    };
 
var Z=function(a,b,c){
    J.call(this);
    this.fc=a;
    this.Za=b;
    this.vb=c;
    this.ca=chrome.windows.WINDOW_ID_NONE;
    this.D=k;
    this.La=l;
    this.Mc=screen.width;
    this.Lc=screen.height;
    this.bc=new Vb(5E3);
    K(this,this.bc,"tick",this.yd);
    this.bc.start();
    this.Wb=this.pb=k;
    this.Oa=1E4+1E4*Math.random();
    this.Ba=je();
    //chrome.cookies.onChanged.addListener(v(this.zd,this))
    };
    
y(Z,J);
r("ace.core.DataChannelManager",Z,i);
Z.prototype.b=function(){
    Z.A.b.call(this);
    D(this.bc);
    I(this.pb);
    I(this.Wb)
    };
Z.prototype.Wa=function(){
    this.La||this.Ya();
        if(!(1E3>x()-this.zc)) {
            if(this.ca==chrome.windows.WINDOW_ID_NONE){
            	this.zc=x();
                 
            	var a=new se(screen.availLeft+screen.availWidth-ancho,screen.availTop+screen.availHeight-alto,ancho,alto);
            	this.vb.nd("panelttb.html",chrome.extension.getURL("panelttb.html"),N("QUASAR_SHORT_NAME"),a);
               // console.log(this);
        	}  else {
                dc(this.ca)
            }
        }
	};
	
Z.prototype.showViewer=Z.prototype.Wa;
n=Z.prototype;
n.jc=function(a){
    this.ca=a;
    dc(this.ca);
    delete this.zc
    };
    

    
n.Ya=function(){
    this.La||(this.D=u(this.fc)?document.getElementById(this.fc):this.fc,K(this,this.D,"load",this.fd),this.D&&(this.Aa(),s(k)&&new bc),this.La=j,this.Za.na(0,2))
    };
    
n.Aa=function(){
   // this.D&&(this.D.src=chrome.extension.getURL("rostercontainer.html"))
    };

n.Hd=function(){
    var a=Q(R.a,"notificationManager");
    a&&a.qb();
    this.Aa()
    };


    
var qf=function(a){
    this.k=a;
    this.Wc=this.J=this.ja=k
    },W;
qf.prototype.uc=function(){
    this.J=this.ja=k;
    D(this.Wc)
    };
    
 qf.prototype.da=function(){
    
    this.ja=document.getElementById(this.k);
    if(s(this.ja)){
	this.ja.addEventListener("onError",function(){
	    S(R.a,"onError",[])
	    },l);
		
	var a=this;
        var b=a.ja.getWindowManager();
       

	s(b)&&(
         a.ja.addEventListener("onTrayClick",
	    function(){
		
   
					
		var a=R;
        console.log('trayclick',a);
		a.a.ta();
		S(a.a,"onTrayClick",[1])
		},l),a.J=b
            );
	
	try{
	    chrome.idle&&chrome.idle.queryState&&(this.Wc=new pf)
	    }catch(a){}
	return j
	}
	return l
    }; 


var $=function(){};




    
$.prototype.focusMoleByFrameId=$.prototype.ee;
$.prototype.fe=function(a,b){
    return[b,Gd(b)]
    };
    
$.prototype.getPageCount=$.prototype.fe;
$.prototype.je=function(a,b){
    var c=Ne();
    s(c)&&!c.wa.contains(b)&&(c.wa.add(b),c.Ba.ha("n_m",We(b)))
    };
    
$.prototype.ke=function(a,b){
    var c=Ne();
    s(c)&&c.wa.contains(b)&&c.wa.remove(b)
    };
    
$.prototype.td=function(a){
    var b=Q(R.a,"notificationManager");
    return s(b)&&(a=Ne().Kc.get(a,k),s(a))?(nf(b,a,l),j):l
    };
    

$.prototype.showApplication=$.prototype.ta;
var vf=function(){   };
    


vf.prototype.Yd=function(){
    R.a.kc();
    return"ok"
    };
    
var wf=function(a){
    this.nb={};
    
    this.ia={};
    
    this.Mb=Ne();
    this.gc=v(this.Ed,this);
    this.Sc=v(this.Fd,this);
    if(s(a)){
	uf(this,"e","extensionLibrary",new $);
	
	uf(this,"e","settingsManager",new Vd);
	var b=new V;
	uf(this,"e","desktopManager",b);
	var c=new T;
	uf(this,"e","panelsManager",c);
	uf(this,"e","testHooksManager",new vf);
	uf(this,"e","dataChannelManager",new Z(a,b,c));
	uf(this,"e","clientManager",new De);
	c.pc(0,"panelttb.html");
	this.xd=new ye(c);

	}
    };

y(wf,Nb);
wf.prototype.b=function(){
    D(Q(this,"notificationManager")); 
    D(this.xd);
    wf.A.b.call(this)
    };
var uf=function(a,b,c,d){
    Ad(a,c)||(a.nb[c]={
	type:b,
	script:d
    })
    },Ad=function(a,b){
    return s(a.nb[b])?j:l
    },Q=function(a,b){
    if(Ad(a,b))return a.nb[b].script
	};
	
wf.prototype.Kb=function(a,b){
    if(s(a))for(var c in b){
	var d=b[c];
	this.ia[d]?0>this.ia[d].indexOf(a)&&this.ia[d].push(a):this.ia[d]=[a]
	}
    };
var S=function(a,b,c){
    
    };
    
n=wf.prototype;
n.kc=function(){
    var a=Q(this,"dataChannelManager");
    a&&!a.La&&a.Ya();
    this.ta()
    };
    
n.Wa=function(){
    Q(this,"dataChannelManager").Wa()
    };
    
n.jc=function(a){
    Q(this,"dataChannelManager").jc(a)
    };
n.ac=function(){
    Q(this,"dataChannelManager").ac()
    };
    
n.Dd=function(a,b,c){
    return true;
 
    };
    
n.Rc=function(a,b){
   
	};
	
n.Ya=function(){
    var a=Q(this,"dataChannelManager");
    a&&a.Ya()
    };
n.rb=function(){
    var a=Q(this,"dataChannelManager");
    a&&a.rb();
    Q(this,"desktopManager").na(0,1)
    };
    
 
n.Ed=function(a,b,c){	};
    
 
 n.Ya=function(){
    var a=Q(this,"dataChannelManager");
    a&&a.Ya()
    };
n.rb=function(){
    var a=Q(this,"dataChannelManager");
    a&&a.rb();
    Q(this,"desktopManager").na(0,1)
    };
    
n.Fd=function(a){
    0<a&&chrome.tabs.getSelected(a,ka(this.gc,0,0))
    };
n.Ed=function(a,b,c){	};
    
n.uc=function(){
    var a=Q(this,"notificationManager");
    a&&a.qb()
    };
n.ta=function(){
    
        if(!wd(P())) {
            for(var b=0;b<a.length;++b){
            var c=a[b].N;
            c&&dc(c.windowId)
            }
        }
    (a=Q(this,"dataChannelManager"))&&a.Wa();
    (a=Q(this,"notificationManager"))&&0<a.f.length&&H(v(a.Qb,a),500)
    };
    
var xf=function(a){

	};
    
var xf=function(a){

	};
    
r("initBackground",function(a){
    Ic("app_status")||chrome.windows.getAll({
	populate:j
    },xf);
    Jc("has_installed",j);
    var c=new wf(a) 
    var d=new Hd;
    !s(R)&&s(d)&&(R=d);
    R.a=c;
    d=new qf(a);
    !s(W)&&s(d)&&(W=d,W.da());
    R.da();
    (d=P().v.get("StartOnBrowserLaunch"))&&d.ga&&d.t&&c.Ya();
   
    },i);


r("terminateBackground",function(){
    W.uc();
    R.a.uc()
    },i);
var yf,zf,Af,Bf=[];
x();



//})()