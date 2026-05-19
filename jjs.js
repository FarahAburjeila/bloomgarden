function welcomeMessage() {
    document.getElementById("welcomeText").innerHTML = "Welcome to Bloom Garden! Enjoy our beautiful bouquets 🌸";
}

function showMessage() {
    document.getElementById("contactText").innerHTML = "Thank you for contacting Bloom Garden! We will reply soon 🌸";
}

function showPrice(price) {
    document.getElementById("priceText").innerHTML = "Bouquet Price: " + price;
}