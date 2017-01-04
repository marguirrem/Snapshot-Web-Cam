;(function(){
	if(!!(navigator.getUserMedia||navigator.webkitGetUserMedia)){
		navigator.webkitGetUserMedia({video:true},function(localMediaStream){
			document.getElementById('video').src = window.URL.createObjectURL(localMediaStream)
		},function (error) {
			console.log(error);
		})
	}else{
		alert("No soportado");
	}
})()