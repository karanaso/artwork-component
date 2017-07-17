'use strict';

const express = require('express');
const app = express();
const { renderToString } = require('react-dom/server');

app.use(express.static('build'));

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));

app.get('/', (req, res) => {
    const template = `<html>
        <head>
        </head>
        <body>
            <div id="app"></div>
            <script
                type="text/javascript"
                src="http://localhost:3000/main.bundle.js"
            ></script>
        </body>
        </html>
        `;

    res.send(200, template );
});

const server = app.listen(3000, () => {
    console.log('server listening at '+server.address().port);
})