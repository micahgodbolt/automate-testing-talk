try {
    var config = require('./config.js');
    // do stuff
} catch (ex) {
    var config = {};

    config.username = process.env.FTP_USER;
    config.password = process.env.FTP_PASSWORD;
}

var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
    username: config.username,
    password: config.password, // optional, prompted if none given
    host: "godbolt.me",
    port: 21,
    localRoot: __dirname + "/public",
    remoteRoot: "/godbolt.me/rwd",
    exclude: ['.DS_Store']
}

ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});
