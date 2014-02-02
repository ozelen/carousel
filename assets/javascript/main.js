(function (){

    // Base Namespace
    window.app = {}

    var init = function () {
        var element = document.getElementById('carousel');
        app.car = new app.Carousel(element, window.app.content);
    }

    window.onload = init;

})();