let body = document.querySelector('html');


function myFunction() {
    var x = document.getElementById("myTopnav");
    
     // body.style.overflow = "hidden";
     //** 1st time click add 2nd click remove so on */
    body.classList.toggle("navbar-scroll-block");
    console.log(body);
    x.style.width = "100%";
    console.log(x);
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
       // body.style.overflow = "auto";
        x.className = "navbar";
    }
    console.log(x);
}    