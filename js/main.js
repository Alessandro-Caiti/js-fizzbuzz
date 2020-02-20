// for (var i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        var img1 = document.createElement("img");
        img1.src = "img/nuke-icon.png";
        var src = document.getElementById("paper");
        src.appendChild(img1);
    } else if (i % 3 == 0) {
        var img2 = document.createElement("img");
        img2.src = "img/fizz-icon.png";
        var src = document.getElementById("paper");
        src.appendChild(img2);
    } else if (i % 5 == 0) {
        var img1 = document.createElement("img");
        img1.src = "img/buzz-icon.png";
        var src = document.getElementById("paper");
        src.appendChild(img1);
    } else {
        var paragraph = document.createElement("P");
        var text = document.createTextNode(i);
        paragraph.appendChild(text);
        document.getElementById("paper").appendChild(paragraph);
    }
}
