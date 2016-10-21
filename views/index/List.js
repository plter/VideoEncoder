/**
 * Created by plter on 10/21/16.
 */

class List {


    constructor() {
        this._ul = document.createElement("ul");
        this._jquery = $(this._ul);
    }

    addItem(item) {
        this.toJQuery().append(item.toJQuery());
    }

    toJQuery() {
        return this._jquery;
    }
}

module.exports = List;