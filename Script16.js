function showFormData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;

    let output = `Name: ${name} <br> Email: ${email} <br> Address: ${address}`;
    document.getElementById("formOutput").innerHTML = output;
}

function changeImage() {
    let img = document.getElementById("changeableImage");
    img.src = img.src.includes("KalkiPainting.jpg") ? "ViratSwaroop.jpg" : "KalkiPainting.jpg";
}

function increaseFontSize() {
    let text = document.getElementById("textToResize");
    let currentSize = window.getComputedStyle(text).fontSize;
    text.style.fontSize = (parseInt(currentSize) + 2) + "px";
}

function decreaseFontSize() {
    let text = document.getElementById("textToResize");
    let currentSize = window.getComputedStyle(text).fontSize;
    text.style.fontSize = (parseInt(currentSize) - 2) + "px";
}

function showDateTime() {
    let currentDateTime = new Date().toLocaleString();
    document.getElementById("dateTime").innerText = `Current Date & Time: ${currentDateTime}`;
}