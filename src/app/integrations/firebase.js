const _firebase = require("firebase-admin");
const _serviceAccount = require('../../../.firebase/labbayk-1e778-firebase-adminsdk-biro1-b2a22419ed.json');
let _instance = null;
import Env from '../../config/env';
const _options = {
    priority: Env.FIREBASE_PRIORITY,
    timeToLive: Number(Env.FIREBASE_TIME_TO_LIVE),
};
class Firebase {

    constructor() {
        if (!_instance) {
            // The Firebase token of the device which will get the notification
            // It can be a string or an array of strings
            _firebase.initializeApp({
                credential: _firebase.credential.cert(_serviceAccount),
                databaseURL: Env.FIREBASE_DATABASE_URL
            });
            _instance = this;
        }
        return _instance;
    }

    send(firebaseToken, notification, data, topic) {
        return _firebase.messaging().sendToDevice(firebaseToken, {
            notification,
            data: {
                result: JSON.stringify(data),
                topic
            }
        }, _options);
    }
}
export default Firebase;