/**
 * Created by plter on 10/21/16.
 */

class ListItem {


    constructor(file) {
        this._file = file;

        this._li = document.createElement("li");
        this._jquery = $(this._li);
        this._jquery.html(this._file.name);
    }

    toJQuery() {
        return this._jquery;
    }
}

module.exports = ListItem;