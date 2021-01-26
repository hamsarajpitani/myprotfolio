let body = document.querySelector('html');


function myFunction() {
    var x = document.getElementById("myTopnav");
    body.style.overflow = "hidden";
    console.log(body);
    x.style.width = "100%";
    console.log(x);
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
        body.style.overflow = "auto";
        x.className = "navbar";
    }
    console.log(x);
}    