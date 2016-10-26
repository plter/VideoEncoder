/**
 * Created by plter on 10/26/16.
 */

const {
    ipcMain,
    dialog
} = require('electron');

ipcMain.on("openDirectory", (event, arg)=> {
    let result = dialog.showOpenDialog({
        title: arg.title,
        properties: ["openDirectory"]
    });
    event.returnValue = result ? result[0] : null;
});