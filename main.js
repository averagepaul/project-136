status=""
function setup(){
    canvas=createCanvas(480,380)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    video.size(480,300)
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded())
    document.getElementById("status").innerHTML="Status:Object Detecting"
    object_name=document.getElementById("object_name").value
}
function modelLoaded(){
    console.log("model loaded")
    status=true
}
function draw(){
    image(video,0,0,480,380)
}