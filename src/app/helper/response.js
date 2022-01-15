class Response {

    static error(res, message, code, status) {
        console.log("return err ===============================", message);
        status = typeof status !== 'undefined' ? status : 400;
        if (typeof message === 'string') {
            const tmpMessage = message;
            message = [];
            message.push({
                path: 'err',
                message: tmpMessage
            });
        }

        const data = {
            'success': false,
            'errors': message
        };

        if (typeof code !== 'undefined')
            data.code = code;

        res.type('application/json');
        res.status(status).send(data);
    };
    
    static rawData(res, data, status) {
        status = typeof status !== 'undefined' ? status : 200;
        res.type('application/json');
        if (!this._checkContent(data))
            return res.status(204).send();
        res.status(status).send(data);
    };

    static pagingData(res, data, offset, limit, total, key, status) {
        status = typeof status !== 'undefined' ? status : 200;
        key = typeof key !== 'undefined' ? key : 'data';
        res.type('application/json');

        if (!this._checkContent(data))
            return res.status(204).send();

        const newData = {
            'success': true
        };

        newData[key] = data;
        newData.offset = offset;
        newData.limit = limit;
        newData.total = total;
        res.status(status).send(newData);
    };

    static success(res, status) {
        status = typeof status !== 'undefined' ? status : 200;
        const data = {
            'success': true
        };
        res.type('application/json');
        res.status(status).send(data);
    };

    static _checkContent(data) {
        if (data === undefined)
            return false;
        return (data.length == 0 || Object.keys(data).length === 0) ? false : true;

    }
}

export default Response;