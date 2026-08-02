window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

document.body.style.opacity = "0";
document.body.style.transition = "opacity 1s";

const button = document.querySelector("button");

button.addEventListener("click", () => {

    button.innerHTML = "⚡ Flying Raijin Activated";

    document.body.animate([
        { filter: "brightness(1)" },
        { filter: "brightness(2)" },
        { filter: "brightness(1)" }
    ], {
        duration: 700
    });

});
