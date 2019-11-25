import Controller from '../../core/controller';
import UserService from '../services/userService'
import JWT from '../helper/jwt';
import response from '../helper/response';
import request from '../helper/request';
import standards from '../helper/standards'
import passport from 'passport';


const userService = new UserService();

class AuthController extends Controller {
  constructor() {
    super();
  }
  register(req, res, next) {
    const {
      name,
      email,
      password
    } = req.body;

    passport.authenticate('register', (err, user, info) => {
      if (err) return response.returnError(res, err);
      
      if (info != undefined)
        return response.returnError(res, info.message, 1);
      else {
        req.logIn(user, (err) => {
          if (err) return response.returnError(res, err);

          const token = JWT.sign(user);
          const options = JWT.options();

          let session = [request.getSession(req)];
          session[0].token = token;

          const data = {
            ...user,
            "sessions": session,
            "name": name
          };

          userService.update(req, data, (err, updated) => {
            res.set('Authorization', token);
            return response.returnData(res, {
              "user": standards.getReturnUser(updated),
              "token": token,
              "expires_in": options.expiresIn
            });
          });
        });
      }
    })(req, res, next);
  }

  login(req, res, next) {
    passport.authenticate('login', {
      session: false
    }, (err, user, info) => {
      if (err) return response.returnError(res, err);

      if (info !== undefined) {
        console.error(info.message);
        if (info.message === 'bad username') {
          res.status(401).send(info.message);
        } else {
          res.status(403).send(info.message);
        }
      } else {
        req.logIn(user, (err) => {
          if (err) return response.returnError(res, err);

          const token = JWT.sign(user);
          const options = JWT.options();

          let session = request.getSession(req);
          session.token = token;

          userService.updateSessions(req, user, session, (err, updated) => {
            res.set('Authorization', token);
            return response.returnData(res, {
              "user": standards.getReturnUser(user),
              "token": token,
              "expires_in": options.expiresIn
            });
          });
        });
      }
    })(req, res, next);
  }
}
export default AuthController;