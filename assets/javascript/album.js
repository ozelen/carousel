(function () {

    app.Album = function (content) {
        this.content = content;
        this.element = document.createElement("div");
        this.images = [];
        this.build();
    }

    app.Album.prototype.build = function () {
        for(var i in this.content.images) {
            var image = new app.Image( this.content.images[i], this.content.dir );
            this.images.push( image );
            this.element.appendChild(image.element);
        }
        this.images[0].show();
        console.log(this.currentImageId());
    }


    app.Album.prototype.show = function () {
        this.element.style.display = "block";
    }

    app.Album.prototype.hide = function () {
        this.element.style.display = "none";
    }

    app.Album.prototype.getNextElement = function ( value ) {
        var next = value % this.images.length
        return next >=0 ? next : this.images.length + next;
    }

    app.Album.prototype.changeImage = function ( increment ) {
        var current = this.currentImageId();
        var next = this.getNextElement(current + increment);
        for(var id in this.images) {
            var img = this.images[id];
            id == next ? img.show() : img.hide();
        }
    }

    app.Album.prototype.currentImageId = function () {
        for(var id in this.images) {
            if(this.images[id].isShown) return parseInt(id);
        }
    }

})();