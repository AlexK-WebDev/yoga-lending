"use strict"

let isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if ( isMobile.any()){
    document.body.classList.add('_touch');
    let menuArrows = document.querySelectorAll('.menu__arrow');
    if(menuArrows.length > 0){
        for(let i = 0; i < menuArrows.length; i++){
            let menuArrow = menuArrows[i];
            menuArrow.addEventListener('click', () => menuArrow.parentElement.classList.toggle('_active'));
        }
    }
} else {
    document.body.classList.add('_pc');
}