const title = document.querySelector(".hello h1");

console.dir(title);

function handleMouseEnter() {
    title.style.color = "darkturquoise";
    title.innerText = "Mouse is here";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone";
    title.style.color = "cornflowerblue";
}

function handleOnContextmenu() {
    title.innerText = "That was a right click!";
    title.style.color = "maroon";
}

function handleOnResize() {
    title.innerText = "you just resized!";
    title.style.color = "darkorchid";
}


title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);
window.addEventListener("contextmenu",handleOnContextmenu);
window.addEventListener("resize",handleOnResize);
