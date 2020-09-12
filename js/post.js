let params = (new URL(document.location)).searchParams;
let name = params.get("id");

const elTitle = document.getElementById('elTitle');
const elDate = document.getElementById('elDate');
const elImage = document.getElementById('elPostImage');

console.log("./assets/post/1.png");
if(name == "1"){
    elTitle.innerHTML = "Nomtes updated with many new Icon, Bookmark support, Videos support and more...";
    elDate.innerHTML = "17 Sep 2020";
    elImage.src = "./assets/post/1.jpg";
    
}