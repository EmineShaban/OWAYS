let easyText = document.getElementsByClassName("easy-text");
let text = document.getElementsByClassName("text"); 
let easyImg = document.getElementsByClassName("easy-img"); 

 for (let i = 0; i < easyText.length; i++) { 
    easyText[i].addEventListener("mouseover", function (e) {
        text[i].style.display = "block"; 
        easyImg[i].className = "easy-img back"
    }) 
    easyText[i].addEventListener("mouseout", function (e) {
        text[i].style.display = "none"; 
        easyImg[i].className = "easy-img"

    })
 }
