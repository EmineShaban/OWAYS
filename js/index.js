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


 
let q = document.getElementsByClassName("q");
let a = document.getElementsByClassName("a");
const onOpen = (e) => {
  if (e.target.classList == "q") {
    console.log(e.target.parentElement.children[1]);
    for (let i = 0; i < a.length; i++) {
      a[i].style.display = "none";
    }
    e.target.parentElement.children[1].style.display = "block";
  }
};
for (let index = 0; index < q.length; index++) {
  q[index].addEventListener("click", onOpen);
}
