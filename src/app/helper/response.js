class Response {

    static returnError(res, message, code, status) {

        console.log("return err ===============================", message);

        const statusCode = typeof status !== 'undefined' ? status : 400;
        let messages = [];
        if (typeof message === 'string') {
            messages.push({
                path: 'err',
                message: message
            });
        }

        const data = {
            'success': false,
            'errors': messages
        };

        if (typeof code !== 'undefined')
            data.code = code;

        res.type('application/json');
        res.status(statusCode).send(data);
    };

    static returnData(res, data, key, status) {
        status = typeof status !== 'undefined' ? status : 200;
        key = typeof key !== 'undefined' ? key : 'data';
        res.type('application/json');
        const newData = {
            'success': true
        };
        newData[key] = data;
        res.status(status).send(newData);
    };

    static returnRawData(res, data, status) {
        status = typeof status !== 'undefined' ? status : 200;
        res.type('application/json');
        res.status(status).send(data);
    };

    static returnPagingData(res, data, key, offset, limit, total, status) {
        status = typeof status !== 'undefined' ? status : 200;
        key = typeof key !== 'undefined' ? key : 'data';
        res.type('application/json');
        const newData = {
            'success': true
        };
        newData[key] = data;
        newData.offset = offset;
        newData.limit = limit;
        newData.total = total;
        res.status(status).send(newData);
    };

    static returnSuccess(res) {
        const data = {
            'success': true
        };
        res.type('application/json');
        res.status(200).send(data);
    };

    static getOffset(req) {
        if (req.query.offset !== undefined) {
            return parseInt(req.query.offset);
        }
        return 0;
    };

    static getLimit(req) {
        if (req.query.limit !== undefined) {
            return parseInt(req.query.limit);
        }
        return 25;
    };

}

export default Response;