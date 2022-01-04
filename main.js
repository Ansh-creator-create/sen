function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas = createCanvas(550, 500);
    canvas.position(600, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('E49100');
}
function modelLoaded(){
    console.log("poseNet instalized");
}
function gotPoses(results){
    if(results > 0){
        console.log(results);
    }
}