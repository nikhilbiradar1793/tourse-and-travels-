function bookPackage(packageName){

document.getElementById("packageName").innerHTML =
"Selected Package: <b>" + packageName + "</b>";

document.getElementById("popup").style.display = "block";
document.getElementById("overlay").style.display = "block";

}

function closePopup(){

document.getElementById("popup").style.display = "none";
document.getElementById("overlay").style.display = "none";

}

window.onclick = function(event){

const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");

if(event.target === overlay){

popup.style.display = "none";
overlay.style.display = "none";

}

}