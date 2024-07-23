const myImage = document.querySelector("img");
myImage.onclick = ()=>{
const mySrc = myImage.getAttribute("src");
if (mySrc=== "images/poetrycode.png"){
    myImage.setAttribute("src", "images/allcodes.png")
}else{myImage.setAttribute("src", "images/poetrycode.png")}}