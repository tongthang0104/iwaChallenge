const webpack = require('webpack')
const path = require('path');

module.exports = {
    context: __dirname + '/src',
    entry: {
        app: './app.js'
    },
    output: {
        path: __dirname + '/src/client/dist',
        filename: 'iwaChallenge.bundle.js'
    }
};
