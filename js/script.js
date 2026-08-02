document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button");

  btn.addEventListener("click", () => {
    btn.innerHTML = "⚡ Teleporting...";
    btn.style.background = "#fff";

    setTimeout(() => {
      alert("⚡ Flying Raijin Activated!\nWelcome to Minato's World.");
      btn.innerHTML = "⚡ Flying Raijin Activated";
      btn.style.background = "#ffd54a";
    }, 800);
  });
});
