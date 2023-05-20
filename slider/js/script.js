new Swiper('.image-slider', 
{
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev'

},
pagination: {
    el: '.swiper-pagination',
    clickable:true,//можно переключать по точкам 
    dynamicBullets: true,

},
scrollbar: {
    el: '.swiper-scrollbar',// скрооол
    draggable: true
},

});

