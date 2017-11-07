function printArray() {
    var fortunes = [];
    var outputText = "<p>";

    for (i = 0; i < fortunes.length; i++) {
        outputText += "<p>" + fortunes[i] + "</p>";
    }
    outputText += "<p>";
    document.getElementById("shakeIt").innerHTML += outputText;
}
