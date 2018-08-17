function getAttributes (){
	var a = document.getElementById('w3r').href;
	var b = document.getElementById('w3r').hreflang;
	var c = document.getElementById('w3r').rel;
	var d = document.getElementById('w3r').target;
	var e = document.getElementById('w3r').type;
	document.write('href: ' + a);
	document.write('</br>hreflang: ' + b);
	document.write('</br>rel: ' + c);
	document.write('</br>target: ' + d);
	document.write('</br>type: ' + e);
}