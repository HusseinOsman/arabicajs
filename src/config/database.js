import jugglingdb from 'jugglingdb';
import config from './app';
let Schema = require('jugglingdb').Schema;
let _schema = null;
let _Schema = null;
let _instance = null;

class Database {

    constructor() {
        if (!_instance) {
            const url = `mongodb://${config.mongoHost}:${config.mongoPort}/${config.mongoName}`;

            console.log("url=> ", url);
            _Schema = jugglingdb.Schema;
            _schema = new Schema('mongodb', {
                url: url,
                w: 1,
                j: 1
            });
            _instance = this;
            console.log("iam a database class constractor");
        }
        return _instance;
    }

    get schema() {
        if (!_instance)
            return false;
        return _schema;
    }

    get Schema() {
        if (!_instance)
            return false;
        return _Schema;
    }
}

export default Database;