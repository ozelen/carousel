(function () {

    app.Button = function (parent_element, caption, callback) {
        var btn  = document.createElement("button");
        btn.innerHTML = caption
        btn.addEventListener('click', callback );
        parent_element.appendChild(btn);
    }

})();