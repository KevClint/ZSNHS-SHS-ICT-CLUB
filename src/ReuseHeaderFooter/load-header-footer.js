// Load header
fetch("/src/ReuseHeaderFooter/header.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("header").innerHTML = html;

    // ✅ Now header exists, safe to add scripts
    const header = document.querySelector("header");
    const headerNav = document.querySelector("nav");
    const hamburger = document.querySelector(".hamburger");
    const menubar = document.querySelector(".menubar");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
        headerNav.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
        headerNav.classList.remove("scrolled");
      }
    });

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      menubar.classList.toggle("active");
    });
  });

// Load footer
fetch("/src/ReuseHeaderFooter/footer.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("footer").innerHTML = html;
  });
