const smoothScrollHandler = (_, id) => {
   const element = document.querySelector(id);
   console.log(element);
   element?.scrollIntoView({behavior: 'smooth'});
}

const navLinksHoverHandler = (event, opacity) => {
   const hovered = event.target;
   const navLinks = [...document.querySelectorAll(".nav__link")];
   const brand = document.querySelector("div.nav__brand");
   if (hovered?.classList.contains("nav__link")) {
      brand.style.opacity = opacity;
      navLinks.filter(link => link !== hovered).forEach(link => link.style.opacity = opacity);
   }
   if (hovered?.classList.contains("nav__brand")) {
      navLinks.forEach(link => link.style.opacity = opacity);
   }
}

const navItemClickHandler = (event) => {
   event.preventDefault();
   const clicked = event.target;
   if (clicked?.classList.contains("nav__link")) {
      const id = clicked.getAttribute('href');
      if (id !== "#") smoothScrollHandler(null, id);
   }
}

const tabButtonClickHandler = (event) => {
   let clicked = event.target;
   clicked = clicked?.classList.contains('.services__tab_btn') ? clicked : clicked?.closest('.services__tab_btn');
   if (clicked) {
      const buttons = [...document.querySelectorAll('.services__tab_btn')];
      buttons.forEach(button => button.classList.remove('services__tab_btn--active'));
      clicked.classList.add('services__tab_btn--active');
      const tabNumber = clicked.dataset.tab;
      const tabs = [...document.querySelectorAll('.services__tab_content')];
      tabs.forEach(tab => tab.classList.remove('services__tab_content--active'));
      document.querySelector(`.services__tab_content--${tabNumber}`).classList.add('services__tab_content--active');
   }
}

const setStickyNavigation = (entries, observer) => {
   const [ entry ] = entries;
   const nav = document.querySelector('.nav');
   if (!entry.isIntersecting) nav.classList.add('sticky');
   else nav.classList.remove('sticky');
}

export {
   smoothScrollHandler,
   navLinksHoverHandler,
   navItemClickHandler,
   tabButtonClickHandler,
   setStickyNavigation
 };