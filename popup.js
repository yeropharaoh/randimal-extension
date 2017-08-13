window.onload = function() {

    var imageList = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"]

    var button = document.getElementById("submit");

    button.addEventListener("click", function() {

        var answer = document.getElementById("img");

        var random = Math.floor(Math.random() * (3 - 0 + 0) + 0);

        answer.setAttribute("src", imageList[random]);


    });
}