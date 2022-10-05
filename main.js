function setup() {
  video = createCapture(VIDEO);
  video.size(450, 450);

  canvas = createCanvas(350, 350);
  canvas.position(560,250);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
  }
}

function draw() {
background('#6C91C2');
}