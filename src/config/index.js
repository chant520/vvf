const config = require('./env.' + process.env.VUE_APP_ENV)
console.log('config', config)
module.exports = config