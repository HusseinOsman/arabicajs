let _instance = null;
class Native {
    constructor(req = null) {
        if (!_instance) {
            this.config = (req !== null) ? req.app.Adapter.datastores.default.config : global.Adapter.datastores.default.config;
            console.log("in Native helper this.config ================",this.config)
            this.data = new Promise(async (resolve, reject) => {
                await global.Adapter.mongodb(this.config.url, async (err, db) => {
                    if (err) {
                        console.log("err Native ==================", err);
                        reject(err);
                    }
                    resolve(db);
                });
            });
            _instance = this.data;
        }
        return _instance;
    }
}

export default Native;