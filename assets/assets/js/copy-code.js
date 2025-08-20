document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("pre code").forEach((codeBlock) => {
    const button = document.createElement("button");
    button.className = "copy-button";
    button.type = "button";
    button.innerText = "Copy";

    button.addEventListener("click", () => {
      const code = codeBlock.textContent;
      navigator.clipboard.writeText(code).then(() => {
        button.innerText = "Copied!";
        setTimeout(() => {
          button.innerText = "Copy";
        }, 2000);
      });
    });

    const pre = codeBlock.parentNode;
    pre.parentNode.insertBefore(button, pre);
  });
});


// toggle menu
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("navbar-toggle");
  const menu = document.getElementById("navbar-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }
});
