function bookPackage(packageName){

document.getElementById("packageName").innerHTML =
"Selected Package: <b>" + packageName + "</b>";

document.getElementById("popup").style.display = "block";
document.getElementById("overlay").style.display = "block";

}
function shareWebsite() {

    const websiteUrl = window.location.href;

    if (navigator.share) {

        navigator.share({
            title: "ANKUSH TOURS & TRAVELS",
            text: "Book your trip with Ankush Tours & Travels",
            url: websiteUrl
        })
        .catch(err => console.log(err));

    } else {

        navigator.clipboard.writeText(websiteUrl);

        alert(
            "Sharing is not supported on this device.\n\nWebsite link copied:\n" +
            websiteUrl
        );
    }
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
