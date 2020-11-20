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
        async (req, email, password, done) => {
            try {
                const User = global.Models.users;
                const user = await User.findOne({
                    where: {
                        email
                    },
                }).select(["id"]);

                if (user != null) {
                    return done(null, false, {
                        message: 'username or email already taken',
                    });
                }
                bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(async hashedPassword => {
                    const user = await User.create({
                        password: hashedPassword,
                        email: req.body.email,
                    }).fetch();

                    return done(null, user);
                });

            } catch (err) {
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
        async (email, password, done) => {
            try {
                const User = global.Models.users;

                const user = await User.findOne({
                    where: {
                        email,
                    },
                })

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
            } catch (err) {
                done(err);
            }
        },
    ),
);

passport.serializeUser(function (user, done) {
    //console.log("serializeUser ===================", user);
    done(null, user);
});
passport.deserializeUser(function (user, cb) {
    //console.log("deserializeUser ===========================", user);
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
    new JWTstrategy(opts, async (payload, done) => {
        try {
            const User = global.Models.users;
            const user = await User.findOne({
                where: {
                    id: payload.id,
                },
            });

            if (user) {
                done(null, {
                    id: user.id,
                    name: user.name,
                    email: user.email
                });
            } else {
                done(null, false);
            }

        } catch (err) {
            done(err);
        }
    }),
);