function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext("2d"); //沒寫var表示全域變數

	// 結束位址要加上前面的50,50
	var gradient = canvas.createLinearGradient(50,50,400,350); 
	gradient.addColorStop(0, 'yellow');
	gradient.addColorStop(1, 'orange');
	gradient.addColorStop(0.5, 'pink');

	canvas.fillStyle = gradient;
	canvas.fillRect(50,50,350,300);
	
	
}
window.addEventListener('load', doFirst, false);