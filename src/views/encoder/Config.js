/**
 * Created by plter on 10/28/16.
 */

const path = require("path");

var Config = {
    ffmpegFile:path.join(path.dirname(path.dirname(path.dirname(__dirname))),"bin/ffmpeg")
};


module.exports = Config;