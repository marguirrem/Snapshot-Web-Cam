;(function () {
	var camara = new Camara("video","canvas",function(){

		var snapBtn = document.getElementById("snap");	
		var btnDownload = document.getElementById("download");
		var btnSticker = document.getElementById("sticker");
		var btnCancel = document.getElementById("cancel");

		snapBtn.addEventListener("click",function(){
			camara.snap();
			document.getElementById("actions").style.display = "block";
		});
		btnDownload.addEventListener("click",function(){
			camara.download();
		});
		btnCancel.addEventListener("click",function(){
			camara.playVideo();
			document.getElementById("actions").style.display = "none";
		});
	
	});
})();

