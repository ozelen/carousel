(function () {

    app.Carousel = function (element, content) {
        this.element = element;
        this.content = content;
        this.albums  = [];
        this.addControls();
        this.build();
        this.albums[0].show();
    }

    app.Carousel.prototype.build = function () {
        for(var a in this.content.albums) {
            var album = new app.Album( this.content.albums[a] );
            this.albums.push( album );
            this.element.appendChild(album.element);
            this.dropdown.addOption(a, this.content.albums[a].desc);
        }
        var c = this;
        setInterval(function() { c.currentAlbum().changeImage( 1); }, 5000);
    }

    app.Carousel.prototype.currentAlbumId = function () {
        return this.dropdown.element.value;
    }

    app.Carousel.prototype.currentAlbum = function () {
        return this.albums[this.currentAlbumId()];
    }

    /**
     * Static method for drop-down event
     * TODO: extract dropdown into a class to avoid that
     * @param carousel
     */
    app.Carousel.prototype.changeAlbum = function ( carousel ) {
        var current = carousel.currentAlbumId();
        for(var id in carousel.albums) {
            var album = carousel.albums[id]
            id == current ? album.show() : album.hide();
        }
    }

    app.Carousel.prototype.addDropDown = function ( parent ) {
        var _self = this;
        this.dropdown = new app.DropDown(parent);
        this.dropdown.element.value = 1;
        this.dropdown.element.addEventListener( "change", function() { _self.changeAlbum(_self); } );
    }

    app.Carousel.prototype.addButtons = function (parent) {
        var carousel = this;
        var album = this.currentAlbum();
        var left  = new app.Button(parent, 'Left',  function() { carousel.currentAlbum().changeImage(-1); });
        var right = new app.Button(parent, 'Right', function() { carousel.currentAlbum().changeImage( 1); });
    }

    app.Carousel.prototype.addControls = function (delay) {
        var controls = document.createElement("div");
        controls.className ="controls";
        this.element.appendChild(controls);
        this.addDropDown(controls);
        this.addButtons (controls);
    }

    app.Carousel.prototype.setTimer = function (delay) {
        var carousel = this;
        console.log(carousel)

    }

})();