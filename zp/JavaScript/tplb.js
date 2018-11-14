var tplb=document.getElementById('tplb');
var img=document.getElementById("tplb").getElementsByTagName('img');
var num=0;
var timer=null;
img[0].style.display="block";
function next() {
	img[num].style.display="none";
	num++;
	if(num==img.length)num=0;
	img[num].style.display="block";
}
function last() {
	img[num].style.display="none";
	num--;
	if(num==-1)num=img.length-1;
	img[num].style.display="block";
}
timer = setInterval(next,5000);