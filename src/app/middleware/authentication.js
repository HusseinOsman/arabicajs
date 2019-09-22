import jwt from 'jsonwebtoken';
import Env from '../../config/env';
class Authentication {
    static check(req, res, next) {
        const authorizationHeader = req.headers.authorization;
        let result;
        if (authorizationHeader) {
            const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
            const options = {
                expiresIn: Env.jwtExpiresIn,
                issuer: Env.jwtIssuer
            };
            try {
                // verify makes sure that the token hasn't expired and has been issued by us
                result = jwt.verify(token, Env.jwtSecret, options);

                // Let's pass back the decoded token to the request object
                req.user = result;
                // We call next to pass execution to the subsequent middleware
                next();
            } catch (err) {
                // Throw an error just in case anything goes wrong with verification
                throw new Error(err);
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