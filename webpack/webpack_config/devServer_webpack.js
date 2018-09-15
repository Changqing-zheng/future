const path = require('path');
const devServer = {
    contentBase:path.resolve(__dirname,'dist'),
    host:'127.0.0.1',
    port:'8080',
    compress:true,
    open:true,
    hot:true
};
module.exports = devServer;