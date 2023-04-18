

function init() {
    var map = new ymaps.Map('map', {
        center: [47.20186926681011,39.79127382299393],
        zoom: 19
    });
}


ymap.ready (init);


$(document).ready(function() {
    $('.menu').click(function() {
        $('.menu').toggleClass('menu');
    });
});