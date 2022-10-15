window.onload = () => {
  let body = document.querySelector("body"),
    preloader = document.getElementById("page-preloader"),
    headerNav = document.querySelector(".header__nav"),
    hoverLigting = document.querySelector(".hover-ligting"),
    animeElem = document.querySelectorAll(
      ".services__ads-circl, .services__sites-circl, .services__audit-circl, .services__seo-circl, .services__smm-circl, .portfolio__button"
    ),
    lang = document.querySelector(".lang"),
    cursor = document.querySelector(".cursor"),
    portfolioElem = document.querySelectorAll(".portfolio__grid-elem"),
    burger = document.querySelector(".burger-menu"),
    title = document.querySelector("#h1"),
    portfolioTitle = document.querySelector("#portfoli__title-h2"),
    sentenceTitle = document.querySelector("#sentence__title-h2"),
    sentenceElem = document.querySelectorAll(".sentence__flex-el"),
    menuMobile = document.querySelector("#header");
  const mediaQuery = window.matchMedia("only screen and (max-width: 1024px)"),
    mediaQueryMobile = window.matchMedia("only screen and (max-width: 600px)");

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
    if (lang.classList.contains("active")) {
      lang.classList.remove("active");
    } else {
      lang.classList.add("active");
    }
  };

  // media 1024
  if (mediaQuery.matches) {
    // Portfolio
    for (let i = 0; i < portfolioElem.length; i++) {
      portfolioElem[i].onclick = function () {
        if (i != 5) {
          this.removeAttribute("href");
          for (let n = 0; n < portfolioElem.length; n++) {
            portfolioElem[n].classList.remove("active");
          }
          this.classList.add("active");
        }
      };
    }
  }
  // media 375
  if (mediaQueryMobile.matches) {
    title.innerHTML =
      "Мы решаем  задачи любого уровня сложности за честную цену";
    portfolioTitle.innerHTML = "<span>Портфолио</span>";
    sentenceTitle.innerHTML = "<span>Мы предлагаем</span>";

    // Burger
    burger.onclick = function () {
      if (burger.classList.contains("active")) {
        burger.classList.remove("active");
        menuMobile.classList.remove("active");
        lang.classList.remove("active");
        setTimeout(() => {
          body.style.overflow = "visible";
        }, 500);
      } else {
        burger.classList.add("active");
        menuMobile.classList.add("active");
        body.style.overflow = "hidden";
      }
    };

    // swipe menu
    menuMobile.addEventListener("touchstart", handleTouchStart, false);
    menuMobile.addEventListener("touchmove", handleTouchMove, false);
    let xDown = null;
    let yDown = null;
    function handleTouchStart(evt) {
      xDown = evt.touches[0].clientX;
      yDown = evt.touches[0].clientY;
    }
    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }
      let xUp = evt.touches[0].clientX;
      let yUp = evt.touches[0].clientY;
      let xDiff = xDown - xUp;
      let yDiff = yDown - yUp;
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          /* left swipe */
          prevSlide();
        } else {
          /* right swipe */
          nextSlide();
        }
      } else {
        if (yDiff > 0) {
          /* up swipe */
          burger.classList.remove("active");
          menuMobile.classList.remove("active");
          lang.classList.remove("active");
          setTimeout(() => {
            body.style.overflow = "visible";
          }, 500);
        } else {
          /* down swipe */
          burger.classList.add("active");
          menuMobile.classList.add("active");
          body.style.overflow = "hidden";
        }
      }
      xDown = null;
      yDown = null;
    }

for (let i = 0; i < sentenceElem.length; i++) {
  sentenceElem[i].onclick = function() {
    if (sentenceElem[i].classList.contains('active')){
      sentenceElem[i].classList.remove('active')
    }
    else{
      sentenceElem[i].classList.add('active')
    }   
  }
}
  }
};
