const fs = require('fs');
const path = require('path');

module.exports.createAccount = fs.readFileSync(path.join(__dirname, 'createAccount.graphql'), 'utf8');
