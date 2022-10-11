window.onload = () => {
  let body = document.querySelector("body"),
    preloader = document.getElementById("page-preloader"),
    headerNav = document.querySelector(".header__nav"),
    hoverLigting = document.querySelector(".hover-ligting"),
    animeElem = document.querySelectorAll(
      ".services__ads-circl, .services__sites-circl, .services__audit-circl, .services__seo-circl, .services__smm-circl, .portfolio__button"
    ),
    header = document.querySelector(".header"),
    lang = document.querySelector(".lang"),
    langText = document.querySelector(".lang-text"),
    cursor = document.querySelector('.cursor');

  // scroll
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute("href");
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  // preloader
  setTimeout(function () {
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done"), (body.style.overflow = "auto");
    }
  }, 2000);

  // animacion scroll
  const options = {
    root: null,
    rootMargin: "20%",
    threshold: 1,
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("anime-active");
      }
    });
  }, options);
  for (let i = 0; i < animeElem.length; i++) {
    observer.observe(animeElem[i]);
  }

  // anime cursor
  body.onmousemove = function (event) {
    event = event || window.event;
    hoverLigting.style.left = event.clientX + "px";
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";

    headerNav.onmouseout = function () {
      hoverLigting.style.opacity = "0";
    };
    headerNav.onmousemove = function () {
      hoverLigting.style.opacity = "1";
    };
  };


// lang
  lang.onclick = function () {
    lang.classList.toggle("active");
    // if (langText.innerHTML == "active") {
    //   langText.innerHTML = "ru";
    // } else {
    //   langText.innerHTML = "ru";
    // }
  };
};