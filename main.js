function preload(){
    song1 = loadSound("Harry Potter Theme Remix.mp3");
    song2 = loadSound("How to Train Your Dragon Theme.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}

song1 = "";
song2 = "";