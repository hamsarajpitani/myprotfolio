function myFunction() {
    var x = document.getElementById("myTopnav");
    console.log(x);
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
        x.className = "navbar";
    }
    console.log(x);
}    