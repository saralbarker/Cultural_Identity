document.onscroll  = function(){

var main = document.getElementById(‘whereTextStopsDiv’);

if (window.scrollY < main.offsetTop)
{
document.getElementById(‘textDiv’).style.position = 'absolute';
document.getElementById('textDiv').style.top = "315px";
console.log("top");
}

else
{
document.getElementById('textDiv').style.top = "0px";
document.getElementById('textDiv').style.position = 'fixed';
console.log("fixed");
}

}