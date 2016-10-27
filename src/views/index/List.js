/**
 * Created by plter on 10/21/16.
 */

class List {


    constructor() {
        this._items = [];
        this._ul = document.createElement("ul");
        this._jquery = $(this._ul);
    }

    addItem(item) {
        this.toJQuery().append(item.toJQuery());
        this._items.push(item);
    }

    getItem(index) {
        return this.items[index];
    }

    toJQuery() {
        return this._jquery;
    }

    get items() {
        return this._items;
    }
}

module.exports = List;