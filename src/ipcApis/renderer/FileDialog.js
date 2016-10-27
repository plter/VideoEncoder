/**
 * Created by plter on 10/26/16.
 */

const {ipcRenderer} = require("electron");

class FileDialog {

    static openDirectory(title) {
        return ipcRenderer.sendSync("openDirectory", {title: title});
    }
}

module.exports = FileDialog;