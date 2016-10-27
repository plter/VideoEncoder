/**
 * Created by plter on 10/27/16.
 */


class ExportSizeSelectOption {


    constructor(text, ffmpegArg) {
        this._text = text;
        this._ffmpegArg = ffmpegArg;

        this._htmlNode = document.createElement("option");
        this._htmlNode.innerHTML = this._text;
    }

    get htmlNode() {
        return this._htmlNode;
    }

    get ffmpegArg() {
        return this._ffmpegArg;
    }
}

module.exports = ExportSizeSelectOption;