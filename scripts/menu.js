
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll(".nav-links li");
    const body = document.querySelector("body");
    const logo_img = document.querySelector(".logo .IMG");
    const logo_text = document.querySelector(".logo-text .work");
    const logo_text2 = document.querySelector(".logo-text .name");

  
    burger.addEventListener("mouseover", () => {
      burger.classList.toggle("hov-burger");
    });
  
    burger.addEventListener("click", () => {
      //Toggle nav
      nav.classList.toggle("nav-active");
      body.classList.toggle("scroll-stop");
      logo_img.classList.toggle("logo-nav-active");
      logo_text.classList.toggle("logo-nav-active");
      logo_text2.classList.toggle("logo-nav-active");
      scroll_to_top.classList.remove("btn-active");
      //Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation =
            "navLinkFade 0.5s ease forwards " + (index / 7 + 0.5) + "s";
        }
      });
      //burger animation
      burger.classList.toggle("burger-active");
      burger.classList.toggle("toggle-brg");
      burger.addEventListener("mouseover", ()=>{
        if (burger.classList.contains("burger-active")){
            burger.addEventListener('mouseover',()=>{
                burger.classList.add('toggle-hov-brg')
            })
            burger.addEventListener('mouseout',()=>{
              burger.classList.remove('toggle-hov-brg')
          })
          }
      })
        
    });
  
    burger.addEventListener("mouseout", () => {
      burger.classList.toggle("hov-burger");
    });
  
  
  
  