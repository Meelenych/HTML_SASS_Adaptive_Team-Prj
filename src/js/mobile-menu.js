;(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]")
    const mobileMenuRef = document.querySelector("[data-menu]")
  
    menuBtnRef.addEventListener("click", () => {
      const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false
  
      menuBtnRef.classList.toggle("is-open")
      menuBtnRef.setAttribute("aria-expanded", !expanded)
  
      mobileMenuRef.classList.toggle("is-open")

      // document.body.classList.toggle("overflow-is-hidden")
    })
  
  const menuItmRef = document.querySelectorAll('[data-menu-item]');

  function closeMenu() {
    mobileMenuRef.classList.remove('is-open');
    menuBtnRef.classList.toggle('is-open');
    
  }
  Array.from(menuItmRef).forEach(item => item.addEventListener('click', closeMenu));
  })();


