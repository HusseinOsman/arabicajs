import Env from '../config/env';
import bcrypt from 'bcryptjs';

const passport = require('passport');
const BCRYPT_SALT_ROUNDS = 12;
const LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
// const User = require('../sequelize');
import UserService from '../app/services/userService';
const userService = new UserService();

passport.use(
    'register',
    new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
            session: false,
        },
        (req, email, password, done) => {
            console.log(email);
            console.log(req.body.email);

            try {
                User.findOne({
                    where: {
                        [Op.or]: [{
                                name,
                            },
                            {
                                email: req.body.email
                            },
                        ],
                    },
                }).then(user => {
                    if (user != null) {
                        console.log('username or email already taken');
                        return done(null, false, {
                            message: 'username or email already taken',
                        });
                    }
                    bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
                        User.create({
                            name,
                            password: hashedPassword,
                            email: req.body.email,
                        }).then(user => {
                            console.log('user created');
                            return done(null, user);
                        });
                    });
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

// const opts = {
//     jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
//     secretOrKey: Env.jwtSecret,
// };
// passport.use(
//     'jwt',
//     new JWTstrategy(opts, (jwt_payload, done) => {
//         try {
//             User.findOne({
//                 where: {
//                     id: jwt_payload.id,
//                 },
//             }).then(user => {
//                 if (user) {
//                     console.log('user found in db in passport');
//                     done(null, user);
//                 } else {
//                     console.log('user not found in db');
//                     done(null, false);
//                 }
//             });
//         } catch (err) {
//             done(err);
//         }
//     }),
// );