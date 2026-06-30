function shareWebsite() {
    if (navigator.share) {
        navigator.share({
            title: "Ankush Tours & Travels",
            text: "Book your travel with Ankush Tours & Travels",
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert("Website link copied to clipboard!");
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
