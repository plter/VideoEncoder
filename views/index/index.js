/**
 * Created by plter on 10/21/16.
 */

//import code
window.$ = window.jQuery = require("../../node_modules/jquery/dist/jquery.min");
require("../../node_modules/jqueryui/jquery-ui.min");
const List = require("./List");
const ListItem = require("./ListItem");

class Index {


    constructor() {
        document.title = "视频转码工具";

        this.addListeners();
    }

    addListeners() {

        let self = this;

        $(document).on("dragover", function (e) {
            e.preventDefault();
        });

        $(document).on("drop", function (e) {
            e.originalEvent.preventDefault();

            var files = e.originalEvent.dataTransfer.files;
            console.log(files);
            self.createListWithFiles(files);
        });
    }

    createListWithFiles(files) {

        var list = new List();

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            list.addItem(new ListItem(file));
        }

        $("#list-container").empty().append(list.toJQuery());
        $("ul").menu();
    }
}

new Index();