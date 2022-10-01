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

  // if (openDropdown.classList.contains("show-dropdown")) {
  //     openDropdown.classList.remove("show-dropdown");
  //   }
  // else{
  //     openDropdown.classList.add("show-dropdown");
  // }
}
