const entry = require('./webpack_config/entry_webpack.js');
const output = require('./webpack_config/output_webpack.js');
const devServer = require('./webpack_config/devServer_webpack.js');
const modules = require('./webpack_config/module_webpack.js');
const plugins = require('./webpack_config/plugins_webpack');
module.exports = {
    // mode:"production",
    mode:"development",
    entry:entry,
    output:output,
    devServer:devServer,
    module:modules,
    plugins:plugins
}