function myFunction() {
    var x = document.getElementById("myTopnav");

    x.style.width = "100%";
    console.log(x);
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
        x.className = "navbar";
    }
    console.log(x);
}    