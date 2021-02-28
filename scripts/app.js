import {
   onInitialScroll,
   onNavItemHoverIn,
   onNavItemHoverOut,
   onNavItemClick,
   onTabButtonClick
 } from './events.js';
import {
   smoothScrollHandler,
   navLinksHoverHandler,
   navItemClickHandler,
   tabButtonClickHandler,
   setStickyNavigation
} from './handlers.js';

const scrollBtn = document.querySelector(".btn__scroll");
const nav = document.querySelector(".nav");
const navLinks = document.querySelector('.nav__links');
const tabButtons = document.querySelector('.services__tab-container');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const navObserver = new IntersectionObserver(
   setStickyNavigation, {root: null, threshold: 0, rootMargin: `-${navHeight}px`}
);

navObserver.observe(header);

onInitialScroll(scrollBtn, smoothScrollHandler, '#destinations');
onNavItemHoverIn(nav, navLinksHoverHandler, 0.5);
onNavItemHoverOut(nav, navLinksHoverHandler, 1);
onNavItemClick(navLinks, navItemClickHandler);
onTabButtonClick(tabButtons, tabButtonClickHandler);
