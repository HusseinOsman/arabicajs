import Waterline from 'waterline';
const orm = new Waterline();
import config from '../config/database';

const fs = require('fs');
const path = require("path");

const modelsFld = __dirname + '/../app/models'
fs.readdirSync(modelsFld)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function (file) {
        const model = require(path.join(modelsFld, file));
        const collection = Waterline.Collection.extend(model);
        orm.registerModel(collection);
    });

module.exports = {
    waterline: orm,
    config: config
};