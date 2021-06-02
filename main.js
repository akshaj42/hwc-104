//https://teachablemachine.withgoogle.com/models/H_p3v9S-9/

Webcam.set({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 100
});
camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_img' src="+data_uri+">";
    });
}

console.log("ml5version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/H_p3v9S-9/",modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}