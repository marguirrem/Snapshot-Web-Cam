;(function(){
	if(!!(navigator.getUserMedia||navigator.webkitGetUserMedia)){
		navigator.webkitGetUserMedia({video:true},function(localMediaStream){
			var video = document.getElementById('video');
			video.src = window.URL.createObjectURL(localMediaStream);
			
			var canvas = document.getElementById('canvas');
			var context = canvas.getContext('2d');
			setInterval(function(){
				context.drawImage(this.video ,0, 0);
			},1000/30)
		},function (error) {
			console.log(error);
		})
	}else{
		alert("No soportado");
	}
})()