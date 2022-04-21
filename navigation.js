

function hamburgerFunction() {
    var element = document.getElementsByClassName("navbar-links");
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
  }