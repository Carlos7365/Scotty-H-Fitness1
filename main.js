const parallax = document.getElementById
("hero-image");

window.addEventListener("scroll", function ()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * .6 + "px";
    // console.log('Offset: ' + offset);
    // console.log("offset * 0.7" + offset)
})

