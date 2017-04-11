var x = 0;
var y = 0;
var r = 0;
var t = 0;
function rotete () {
	x += 2;
	y += 3;
	r += 5;
	t += 6;
	document.querySelector('.scene').style.transform = 'rotateY(' + y + 'deg)'+ 'rotateX(' + x + 'deg)';
	// document.querySelector('.cubeS').style.transform = 'rotateY(' + t + 'deg)'+ 'rotateX(' + r + 'deg)';

}

var time;
var clickPlay=true;
$("body").click(function () {

if (clickPlay==true) {

time = setInterval(rotete,50);

clickPlay=false ;

} else {
clickPlay=true;	
clearInterval(time);
}
})