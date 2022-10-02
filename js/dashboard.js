function changeLanguage(language) {
  var element = document.getElementById("url");
  element.value = language;
  element.innerHTML = language;
}

function showDropdown() {
  openDropdown = document.querySelector(".dropdown-div");
  if ((openDropdown.style.display = "none")) {
    openDropdown.style.display = "unset";
  }
}

// popup btn
function logoutbtn() {
  document.querySelector(".logout-popup").style.display = "unset";
}
function closelogoutpopup() {
  document.querySelector(".logout-popup").style.display = "none";
}

function buyApipopup() {
  document.querySelector(".buy-api-popup").style.display = "unset";
  document.querySelector(".background-overlay-popup").style.display = "unset";
}

function closeApipopup() {
  document.querySelector(".buy-api-popup").style.display = "none";
  document.querySelector(".background-overlay-popup").style.display = "none";
}

function extenddatepopup() {
  document.querySelector(".extend-date-popup").style.display = "unset";
  document.querySelector(".background-overlay-popup").style.display = "unset";
}

function closeextendDate() {
  document.querySelector(".extend-date-popup").style.display = "none";
  document.querySelector(".background-overlay-popup").style.display = "none";
}

function renewPrice() {
  document.querySelector(".renew-price-popup").style.display = "unset";
  document.querySelector(".background-overlay-popup").style.display = "unset";
}

function closeRenewPrice() {
  document.querySelector(".renew-price-popup").style.display = "none";
  document.querySelector(".background-overlay-popup").style.display = "none";
}
