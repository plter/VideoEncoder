/**
 * Created by plter on 10/21/16.
 */

//import code
window.$ = window.jQuery = require("../../libs/jquery.min");
require("../../libs/jquery-ui-1.12.1/jquery-ui.min");
const List = require("./List");
const ListItem = require("./ListItem");
const FileDialog = require('../../ipcApis/renderer/FileDialog');

class Index {

    constructor() {
        document.title = "视频转码工具";

        this.renderUI();
        this.addListeners();
    }

    renderUI() {
        $("button").button();

        this.pathForSavingFiles = $("#path-for-saving-files");
    }

    addListeners() {

        let self = this;

        $(document).on("dragover", function (e) {
            e.preventDefault();
        });

        $(document).on("drop", function (e) {
            e.originalEvent.preventDefault();

            var files = e.originalEvent.dataTransfer.files;
            self.createListWithFiles(files);
        });

        $("#btn-start-encode").click(function (e) {
            if (self.pathForSavingFiles.val() == "") {
                alert("请选择输出目录");
                return;
            }

            if (!this.currentList || this.currentList.length == 0) {
                alert("请选择要转码的文件");
                return;
            }

            if (this.currentList) {
                this.currentList.items.forEach(item=> {
                    item.startEncode();
                });
            }
        }.bind(this));

        this._fileFieldForOpenVideos = $("#file-filed-for-open-videos");
        $("#btn-open-video-files").click(function () {
            self._fileFieldForOpenVideos.click();
        });
        this._fileFieldForOpenVideos.change(function () {
            if (this.files && this.files.length) {
                self.createListWithFiles(this.files);
            }
        });
        $("#btn-select-output-dir").click(function () {
            let path = FileDialog.openDirectory("选择输出目录");
            if (path) {
                self.pathForSavingFiles.val(path);
            }
        });
    }

    createListWithFiles(files) {

        this.currentList = new List();

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            this.currentList.addItem(new ListItem(file));
        }

        $("#list-container").empty().append(this.currentList.toJQuery());
        $("ul").menu();
    }

    getCurrentPathForSaving() {
        return this.pathForSavingFiles.val();
    }
}

window.indexedApp = new Index();