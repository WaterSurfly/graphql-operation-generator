const fs = require('fs');
const path = require('path');

module.exports.getItemData = fs.readFileSync(path.join(__dirname, 'getItemData.graphql'), 'utf8');
module.exports.getEquipData = fs.readFileSync(path.join(__dirname, 'getEquipData.graphql'), 'utf8');
module.exports.getCachePlayerInfo = fs.readFileSync(path.join(__dirname, 'getCachePlayerInfo.graphql'), 'utf8');
module.exports.getPlayerInfo = fs.readFileSync(path.join(__dirname, 'getPlayerInfo.graphql'), 'utf8');
module.exports.hello = fs.readFileSync(path.join(__dirname, 'hello.graphql'), 'utf8');
module.exports.hello2 = fs.readFileSync(path.join(__dirname, 'hello2.graphql'), 'utf8');
module.exports.auth = fs.readFileSync(path.join(__dirname, 'auth.graphql'), 'utf8');
module.exports.login = fs.readFileSync(path.join(__dirname, 'login.graphql'), 'utf8');
module.exports.getAccountInfo = fs.readFileSync(path.join(__dirname, 'getAccountInfo.graphql'), 'utf8');
module.exports.getAllAccountInfo = fs.readFileSync(path.join(__dirname, 'getAllAccountInfo.graphql'), 'utf8');
