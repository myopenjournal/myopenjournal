// Start sails and pass it command line arguments
module.exports = require('sails').lift(require('optimist').argv);

// Appease grunt-express-server with some output
console.log('API Running');
