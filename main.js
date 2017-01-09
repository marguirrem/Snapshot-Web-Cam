;(function () {
	console.log("Lanzado");
	var camara = new Camara("video","canvas",function(){

		var snapBtn = document.getElementById("snap");	
		snapBtn.addEventListener("click",function(){
			var imnageURL = camara.canvas.toDataURL("image/png");
			var link = document.getElementById("link");
			link.href=imnageURL;
			link.download= "photo.png";
			link.click();
		});
	});
})();

