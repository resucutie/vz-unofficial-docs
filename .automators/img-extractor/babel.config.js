module.exports = {
    "presets": ["@babel/preset-env"],
    "ignore": [/node_modules/, "./.compiled", "./babel.config.js"],
    "plugins": ["@babel/plugin-transform-runtime"]
};