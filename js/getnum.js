// JavaScript Document
function getNum() {
    var size = document.getElementById("size");
    var option = size.options[size.selectedIndex].text;
    var txt = document.getElementById("result").value;
	txt=option;
    txt1 = txt*10/3;
	txt2 = txt1*1.77;
	txt5 = txt1+30;
    document.getElementById("result").value = txt;
	var style = document.createElement('style');
	var style3 = document.createElement('style');
style.type = 'text/css';
style3.type = 'text/css';
style.innerHTML = '.screensize { width: ' +  txt2+'px; height: ' + txt1+'px;display:block;outline:4px solid #000;}';
document.getElementsByTagName('head')[0].appendChild(style);
document.getElementById('screen').className = 'screensize';
style3.innerHTML = '.screenholdr { top: ' + txt5+'px !important;}';
document.getElementsByTagName('head')[0].appendChild(style3);
document.getElementById('screenholder').className = 'screenholdr';
addCopy();
}
function getSecNum() {
    var size2 = document.getElementById("size2");
    var option2 = size2.options[size2.selectedIndex].text;
    var txtnew = document.getElementById("results").value;
	txtnew=option2;
    txt3 = txtnew*10/3;
	txt4 = txt3*1.77;
	document.getElementById("results").value = txtnew;
	var style2 = document.createElement('style');

style2.type = 'text/css';
style2.innerHTML = '.screensizer { width: ' +  txt4+'px; height: ' + txt3+'px;}';
document.getElementsByTagName('head')[0].appendChild(style2);
document.getElementById('screensec').className = 'screensizer';
}
function addCopy(){
	var sizer = document.getElementById('screen');
    styler = window.getComputedStyle(sizer);
    var width = styler.getPropertyValue('width');
	var width1 = parseInt(width, 10);
	console.log(width1);
	x = width1;
	resizeMe(x);
		if(width1 > 880){
	console.log('dang you a big box');
		}else{
		console.log('hi little bitty box');		
	}
}
function resizeMe(x){
	//get #screen width ..if bigger than 800 move screen to left
	if(x > 1000){
	$('.screenholdr').css('margin-left', "-110px");
	}else if(x <700){
	$('.screenholdr').css('margin-left', "100px");
	}else{
	$('.screenholdr').css('margin-left', "-20px");	
	}
}

function tv(){
  tv.prototype.name;
  tv.prototype.size;
  tv.prototype.price;  
}

var tv1 = new tv();
var tv2 = new tv();
var tv3 = new tv();

tv1.name = "55 inch tv";
tv1.size = "42";
tv1.price = "599"
tv2.name = "60 inch tv";
tv2.size = "52";
tv2.price = "899";
tv3.name = "65 inch tv";
tv3.price = "1999";


console.log(tv1.name);

function getPrice(x){
   console.log(x.price);
}

//getPrice(tv3);