function start() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.sound.Classifier('https://teachablemachine.withgoogle.com/models/4uNbEcWQq/model.json', modelLoaded)
}

function modelLoaded() {
    console.log("model is loaded")
    classifier.classify(gotResults)
}