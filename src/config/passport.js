import Env from '../config/env';
import bcrypt from 'bcryptjs';

const passport = require('passport');
const BCRYPT_SALT_ROUNDS = 12;
const LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
    'register',
    new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
            session: true,
        },
        (req, email, password, done) => {
            try {
                const User = global.Models.users;
                User.findOne({
                    where: {
                        email
                    },
                }).then(user => {
                    if (user != null) {
                        console.log('passport -> username or email already taken');
                        return done(null, false, {
                            message: 'username or email already taken',
                        });
                    }
                    bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(async hashedPassword => {
                        const user = await User.create({
                            password: hashedPassword,
                            email: req.body.email,
                        }).fetch();

                        console.log('passport -> user created', user);
                        return done(null, user);
                    });
                });
            } catch (err) {
                console.log('passport -> err ', err);
                return done(err);
            }
        },
    ),
);



passport.use(
    'login',
    new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            session: false,
        },
        (email, password, done) => {
            try {
                const User = global.Models.users;

                User.findOne({
                    where: {
                        email,
                    },
                }).then(user => {
                    if (!user)
                        return done(null, false, {
                            message: 'bad email'
                        });

                    bcrypt.compare(password, user.password).then(response => {
                        if (response !== true)
                            return done(null, false, {
                                message: 'passwords do not match'
                            });

                        //user found & authenticated
                        return done(null, user);
                    });
                });
            } catch (err) {
                done(err);
            }
        },
    ),
);

passport.serializeUser(function (user, done) {
    console.log("serializeUser ===================", user);
    done(null, user);
});
passport.deserializeUser(function (user, cb) {
    console.log("=================desrialize====================", user);
    cb(null, user);
});
// passport.deserializeUser(function (user, done) {
//     console.log("=================desrialize====================",user);
//     const User = global.Models.users;
//     User.findOne({
//         where: {
//             id:user.id
//         },
//     }).then(user => {
//         done(err, user);
//     });
// });


const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: Env.jwtSecret,
};

passport.use(
    'jwt',
    new JWTstrategy(opts, (jwt_payload, done) => {
        console.log("passport jwt =============", jwt_payload)
        try {
            const User = global.Models.users;
            User.findOne({
                where: {
                    id: jwt_payload.id,
                },
            }).then(user => {
                if (user) {
                    console.log('user found in db in passport');
                    done(null, {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    });
                } else {
                    console.log('user not found in db');
                    done(null, false);
                }
            });
        } catch (err) {
            console.log("jwt err ======================", err)
            done(err);
        }
    }),
);