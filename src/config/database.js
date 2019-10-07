import mongoAdapter from 'sails-mongo';
import Env from '../config/env';
const config = {

    adapters: {
        'sails-mongo': mongoAdapter,
        // ...other Waterline-compatible adapters (e.g. 'sails-mysql') might go here
    },

    datastores: {
        default: {
            adapter: 'sails-mongo',
            url: `mongodb://${Env.mongoHost}:${Env.mongoPort}/${Env.mongoName}`
        },
    },
    defaultModelSettings: { // defaultModelSettings
        primaryKey: 'id',
        datastore: 'default',
        attributes: {
            // id: {
            //     type: 'number',
            //     autoMigrations: {
            //         autoIncrement: true
            //     }
            // },
            id: {
                type: 'string',
                columnName: '_id'
            },
            test: {
                type: 'string',
                default:"test defaul"
            },
        },
        // ...any other orm-wide default settings for all models go here
    }
};

module.exports = config;