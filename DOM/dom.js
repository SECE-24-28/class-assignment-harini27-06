//getelementbyid
//getelementbyclassname
//getelementbytagname
//query selector
//query selectorall

let head=document.getElementById("head");
console.log(head);
head.innerText="welcome back";
//head.innerhtml="<h1>Hello</h1>"
head.style.color-"pink";
head.style.fontsize="20px";

let fruits=document.getElementsByClassName("fruits");
//console.log(fruits);
fruits[0].style.color="red";
fruits[1].style.color="green";

let ele=document.querySelector("div");
console.log(ele);

let ele1=document.querySelectorAll("div");
console.log(ele1);

let h2ele=document.createElement("h2");
console.log(h2ele);
h2ele=innerText="this is an element";

//document.body.append(h2ele)
document.getElementById("new").appendChild(h2ele)
function hideText(){
    head.style.display="none";
}
function showText(){
    head.style.display="block";
}
function hideshowtext(){
    if(head.style.display==="none"){
    }
}

document.getElementById("hidebtn").addEventListener("click",hideText);
document.getElementById("showbtn").addEventListener("click", showText);
document.getElementById("togglebtn").addEventListener("click", hideshowtext);










