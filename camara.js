class Camara{
	constructor(video,canvas,callback){
		if(!this.validationBrowser()) return;
		this.video = document.getElementById("video");
		console.log("objeto creado");
		this.canvas = document.getElementById("canvas");
		this.contexto = this.canvas.getContext("2d");
		
		navigator.webcam({video: true},(localMediaStream)=>{
			this.setVideo(localMediaStream);
			this.setCanvas();
			callback();
			},function(error){
			console.log(error);
		});

	}
	setVideo(localMediaStream){
		this.video.src = window.URL.createObjectURL(localMediaStream);
	}

	setCanvas(){
		video.addEventListener("play",()=> this.loop());
	}

	loop(){
		if(this.video.paused || this.video.ended) return;

		this.draw();
		setTimeout(()=> this.loop(),1000/30);
	}

	draw(){
		this.contexto.drawImage(this.video,0,0);
	}

	validationBrowser(){
		navigator.webcam = (
		navigator.msGetUserMedia ||
		navigator.mozGetUserMedia ||
		navigator.webkitGetUserMedia ||
		navigator.getUserMedia
		);
		return !!(navigator.webcam);
	}
}