import Controller from '../../core/controller';
import UserService from '../services/userService'
import bcrypt from 'bcryptjs';
import JWT from '../helper/jwt';

const userService = new UserService();

class AuthController extends Controller {
  constructor() {
    super();
  }

  register(req, res) {
    const {
      name,
      email,
      password
    } = req.body;

    userService.create(req, [name, email, password], (err, user) => {
      if (err) return res.status(500).send("Server error!");
      const payload = {
        id: user.id,
        user: user.name
      };

      const token = JWT.sign(payload);
      const options = JWT.options();
      const session = {
        token: token,
        'user-agent': req.header('user-agent'),
        'ip': req.header('x-forwarded-for') || req.connection.remoteAddress
      }
      userService.updateSessions(req, user, session, (err, updated) => {
        res.status(200).send({
          "user": user,
          "token": token,
          "expires_in": options.expiresIn
        });
      });
    });
  }

  login(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    userService.findByEmail(req, email, (err, user) => {
      if (err) return res.status(500).send('Server error!');
      if (!user) return res.status(404).send('User not found!');
      const result = bcrypt.compareSync(password, user.password);
      if (!result) return res.status(401).send('Password not valid!');

      const payload = {
        id: user.id,
        user: user.name
      };

      const token = JWT.sign(payload);
      const options = JWT.options();
      const session = {
        token: token,
        'user-agent': req.header('user-agent'),
        'ip': req.header('x-forwarded-for') || req.connection.remoteAddress
      }
      userService.updateSessions(req, user, session, (err, updated) => {
        console.log("(err,updated)", err, updated)
        res.status(200).send({
          "user": user,
          "token": token,
          "expires_in": options.expiresIn
        });
      });
    });
  }
}
export default AuthController;