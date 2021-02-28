const onInitialScroll = (item, handler, id) => item.addEventListener('click',(event) => handler(event, id));

const onNavItemHoverIn = (item, handler, opacity) => item.addEventListener("mouseover", (event) => handler(event, opacity));

const onNavItemHoverOut = (item, handler, opacity) => item.addEventListener("mouseout", (event) => handler(event, opacity));

const onNavItemClick = (item, handler) => item.addEventListener('click', handler);

const onTabButtonClick = (item, handler) => item.addEventListener('click', handler);


export {
   onInitialScroll,
   onNavItemHoverIn,
   onNavItemHoverOut,
   onNavItemClick,
   onTabButtonClick
};
