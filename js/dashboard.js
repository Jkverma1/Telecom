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

function confirmPaymentTask(){
  document.querySelector(".confirm-payment-task-popup").style.display = "unset";
}

function closeconfirmPaymentTask(){
  document.querySelector(".confirm-payment-task-popup").style.display = "none";
}

function subBtn1() {
  let subBtn1 = document.querySelector(".first-button");
  let subBtn2 = document.querySelector(".second-button");
  subBtn1.style.color = "#008f7d";
  subBtn1.style.borderBottom = "2px solid #008f7d";
  document.getElementById("sub-tab-1").style.display ="unset";
  document.getElementById("sub-tab-2").style.display ="none";
  subBtn2.style.color = "#A0A7A7";
  subBtn2.style.borderBottom = "none";
}

function subBtn2() {
  let subBtn1 = document.querySelector(".first-button");
  let subBtn2 = document.querySelector(".second-button");
  subBtn1.style.color = "#A0A7A7";
  subBtn1.style.borderBottom = "none";
  document.getElementById("sub-tab-1").style.display ="none";
  document.getElementById("sub-tab-2").style.display ="unset";
  subBtn2.style.color = "#008f7d";
  subBtn2.style.borderBottom = "2px solid #008f7d";
}
