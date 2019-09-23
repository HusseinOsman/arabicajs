import jwt from 'jsonwebtoken';
import Env from '../../config/env';

class JWT {

    static verify(token) {
        // verify makes sure that the token hasn't expired and has been issued by us
        return jwt.verify(token, Env.jwtSecret, this.options());
    }

    static sign(payload) {
        return jwt.sign(payload, Env.jwtSecret, this.options());
    }

    static options() {
        return {
            expiresIn: Env.jwtExpiresIn,
            issuer: Env.jwtIssuer
        };
    }
}

export default JWT;