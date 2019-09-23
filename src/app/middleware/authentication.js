import JWT from '../helper/jwt';
class Authentication {
    static check(req, res, next) {
        const authorizationHeader = req.headers.authorization;
        let result;
        if (authorizationHeader) {
            const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
            try {
                // verify makes sure that the token hasn't expired and has been issued by us
                result = JWT.verify(token);

                // Let's pass back the decoded token to the request object
                req.user = result;
                // We call next to pass execution to the subsequent middleware
                next();
            } catch (err) {
                result = {
                    error: err,
                    status: 401
                };
                res.status(401).send(result);
                // Throw an error just in case anything goes wrong with verification
                //throw new Error(err);
            }
        } else {
            result = {
                error: `Authentication error. Token required.`,
                status: 401
            };
            res.status(401).send(result);
        }
    }
};

export default Authentication;