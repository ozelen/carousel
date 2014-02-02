(function () {

    app.Image = function (content, dir) {
        this.content = content;
        this.element = document.createElement("div");
        this.dir = dir;
        this.isShown = false;
        this.build();
    }

    app.Image.prototype.build = function () {
        var img = new Image();
        img.src = ['assets/images', this.dir, this.content.name].join('/');
        this.element.appendChild(img);
    }

    app.Image.prototype.show = function () {
        this.isShown = true;
        this.element.style.display = 'block';
    }

    app.Image.prototype.hide = function () {
        this.isShown = false;
        this.element.style.display = 'none';
    }

})();