import passport from 'passport';

module.exports = passport.authenticate('jwt', {
    session: false
});