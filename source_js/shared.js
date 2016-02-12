function randomColorGenerator() {
    var randomNumber = Math.random() * 10;
    if (randomNumber <= 10/3) {
        return "blue";
    }
    else if (randomNumber <= 20/3) {
        return "red";
    }
    else {
        return "yellow";
    }
}