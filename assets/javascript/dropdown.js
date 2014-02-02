(function () {
    app.DropDown = function (parent_element) {

        this.element = document.createElement("select");
        parent_element.appendChild(this.element);

    }

    app.DropDown.prototype.addOption = function (value, description) {
        var option = document.createElement("option");
        option.value = value
        option.innerHTML = description;
        this.element.appendChild(option);
    }

})();