const shareButtons = document.querySelectorAll(".tile-share-button");
console.log(shareButtons);

function copyText(e) {
    e.preventDefault();
    const link = this.getAttribute("link")
    console.log(link);
}

shareButtons.forEach(shareButton => shareButton.addEventListener("click", copyText));