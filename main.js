noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
      video = createCapture(VIDEO);
      video.size(550, 550);
      canvas = createCanvas(550, 500);
      canvas.position(560, 90);
      poseNet = ml5.poseNet(video, modelLoaded);
      poseNet.on('pose', gotPoses);
}

function modelLoaded() {
      console.log('PoseNet is initialised!');
}

function draw() {
      background('#969A97');
      document.getElementById("square_side").innerHTML = "Width and height of the square will be " + difference + "px.";
      fill('#F90093');
      stroke('#F90093');
      square(noseX, noseY, difference);
}

function gotPoses(results) {
      if (results.length > 0) {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("Nose X = " + noseX + " & Nose Y = " + noseY);
            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);
            console.log("Left Wrist X = " + leftWristX + " Right Wrist X = " + rightWristX + " Difference = " + difference);

      }
}