window.onload = () => {
  let body = document.querySelector("body"),
    preloader = document.getElementById("page-preloader"),
    preloaderLine = document.querySelector(".preloader__line"),
    headerNav = document.querySelector(".header__nav"),
    logo = document.querySelector("#logo"),
    headerNavItem = document.querySelectorAll(".header__nav-item"),
    hoverLigting = document.querySelector(".hover-ligting"),
    checkbox = document.querySelector(".checkbox"),
    textareaWrapper = document.querySelector(".textarea-wrapper"),
    textareaInput = document.querySelector(".textarea"),
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
    checkboxButton = document.querySelectorAll(".checkbox-button"),
    blogElem = document.querySelectorAll(".blog-elem"),
    // checkboxArrow = document.querySelectorAll(".checkbox-img"),
    menuMobile = document.querySelector("#header"),
    newScrinWidth = screen.width,
    mediaQuery = window.matchMedia("only screen and (max-width: 1280px)"),
    mediaQueryMobile = window.matchMedia("only screen and (max-width: 600px)");
  // preloader.style.display = "none";

  // resize
  window.addEventListener("resize", function () {
    newScrinWidth = screen.width;
    media();
  });

  function titleDesk() {
    if (title) {
      title.innerHTML =
        "<span>Web-студия</span> решающая задачи любого уровня сложности за честную цену";
    }
    if (portfolioTitle) {
      portfolioTitle.innerHTML =
        "<span>Портфолио</span> — работы нашей команды";
    }
    if (sentenceTitle) {
      sentenceTitle.innerHTML =
        "<span>Мы предлагаем</span>  — широкий спектр web услуг";
    }
  }

  function media() {
    titleDesk();
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
    if (preloader) {
      setTimeout(function () {
        if (!preloader.classList.contains("done")) {
          preloader.classList.add("done"), (body.style.overflow = "visible");
        }
      }, 2000);

      setTimeout(() => {
        preloader.style.display = "none !important";
      }, 2500);

      // preloader loading
      function loading() {
        setTimeout(() => {
          setTimeout(() => {
            preloaderLine.innerHTML = "Loading";
          }, 500);
          setTimeout(() => {
            preloaderLine.innerHTML = "Loading.";
          }, 1000);
          setTimeout(() => {
            preloaderLine.innerHTML = "Loading..";
          }, 1500);
          setTimeout(() => {
            if (!preloader.classList.contains("done")) {
              preloaderLine.innerHTML = "Loading...";
              loading();
            }
          }, 2000);
        }, 100);
      }
      loading();
    } else {
      body.style.overflow = "visible";
    }

    // animacion scroll
    const options = {
      root: null,
      rootMargin: "30%",
      threshold: 1,
    };
    const observer = new IntersectionObserver((entries, obs, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          obs.unobserve(entry.target);
        }
      });
    }, options);
    for (let i = 0; i < animeElem.length; i++) {
      observer.observe(animeElem[i]);
      observer.observe(portfolioElem[0]);
    }

    if (newScrinWidth >= 1281) {
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
    }

    // lang
    lang.addEventListener("click", function () {
      if (lang.classList.contains("active")) {
        lang.classList.remove("active");
      } else {
        lang.classList.add("active");
      }
    });

    // checkbox

    if (checkbox) {
      checkbox.addEventListener("click", function () {
        checkbox.classList.toggle("active");
      });
    }

    if (checkboxButton) {
      for (let i = 0; i < checkboxButton.length; i++) {
        checkboxButton[i].addEventListener("click", function () {
          if (!checkboxButton[i].classList.contains("active")) {
            checkboxButton[i].classList.add("active");
            for (let x = 0; x < checkboxButton.length; x++) {
              if (x !== i) {
                checkboxButton[x].classList.remove("active");
              }
            }
          } else {
            checkboxButton[i].classList.remove("active");
          }
        });
      }
    }

    // textaria focus
    if (textareaWrapper) {
      textareaWrapper.addEventListener("click", function () {
        textareaInput.focus();
        textareaWrapper.classList.add("active");
      });
      textareaWrapper.addEventListener("focusout", function () {
        textareaWrapper.classList.remove("active");
      });
    }
    // blog elem hover
    if (blogElem) {
      let current = undefined;
      function onMouseover() {
        if (current) {
          current.classList.remove("active");
        }
        this.classList.add("active");
        current = this;
      }
      for (let i = 0; i < blogElem.length; i++) {
        blogElem[i].addEventListener("mouseover", onMouseover);
      }
    }

    // tablet
    if (newScrinWidth <= 1280) {
      titleDesk();
      // Portfolio
      if (portfolioElem) {
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

      if (blogElem) {
        for (let i = 0; i < blogElem.length; i++) {
          blogElem[i].removeEventListener("mouseover", onMouseover);
          blogElem[i].addEventListener("click", function () {
            if (!blogElem[i].classList.contains("active")) {
              blogElem[i].classList.add("active");
              removeClass();
            }
            else{
              blogElem[i].classList.remove("active");
              removeClass();
            }
            function removeClass() {
              for (let x = 0; x < blogElem.length; x++) {
                if (i !== x) {
                  blogElem[x].classList.remove("active");
                }
              }
            }
           
          });

        
        }
      }
    }
    // mobile
    if (newScrinWidth <= 600) {
      if (title) {
        title.innerHTML =
          "Мы решаем  задачи любого уровня сложности за честную цену";
      }
      if (portfolioTitle) {
        portfolioTitle.innerHTML = "<span>Портфолио</span>";
      }
      if (sentenceTitle) {
        sentenceTitle.innerHTML = "<span>Мы предлагаем</span>";
      }

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

      // closeMenu
      function closeMenu() {
        burger.classList.remove("active");
        menuMobile.classList.remove("active");
        lang.classList.remove("active");
        body.style.overflow = "visible";
      }

      // headerNavItem
      for (let i = 0; i < headerNavItem.length; i++) {
        headerNavItem[i].addEventListener("click", function () {
          closeMenu();
        });
      }
      logo.addEventListener("click", function () {
        closeMenu();
      });

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
      // accordion
      if (sentenceElem) {
        // sentenceElem.forEach((e) => {
        //   e.addEventListener("click", () => {
        //     removeClass();
        //     e.classList.add("active");
        //   });
        // });
        // function removeClass() {
        //   sentenceElem.forEach((e) => {
        //     e.classList.remove("active");
        //   });
        // }
        for (let i = 0; i < sentenceElem.length; i++) {
          sentenceElem[i].addEventListener("click", function () {
            if (!sentenceElem[i].classList.contains("active")) {
              sentenceElem[i].classList.add("active");
              removeElem();
            } else {
              sentenceElem[i].classList.remove("active");
              removeElem();
            }
            function removeElem() {
              for (let x = 0; x < sentenceElem.length; x++) {
                if (i != x) {
                  sentenceElem[x].classList.remove("active");
                }
              }
            }
          });
        }
      }
    }
  }
  media();
};
