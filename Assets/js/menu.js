function myFunction() {
    var x = document.getElementById("myNavigation");
    if (x.className === "Navigation") {
      x.className += " responsive";
    } else {
      x.className = "Navigation";
    }
  }