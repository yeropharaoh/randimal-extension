window.onload = function() {

    var imageList = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"]

    var button = document.getElementById("submit");

    var random = Math.floor(Math.random() * (3 - 0 + 0) + 0);

    button.addEventListener("click", function() {

        var answer = document.getElementById("img");

        var random = Math.floor(Math.random() * (3 - 0 + 0) + 0);

        console.log(imageList[random]);

        var randomImg = imageList[random];

        console.log(randomImg);
        answer.setAttribute("src", imageList[random]);

        console.log(answer)

    });
}