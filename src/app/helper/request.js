class request {

    static getSession(req) {
        const session = {
            'user-agent': req.header('user-agent'),
            'ip': req.header('x-forwarded-for') || req.connection.remoteAddress,
            'created_at':new Date()
        };

        return session;
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

export default request;