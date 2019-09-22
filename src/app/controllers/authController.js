import Controller from '../../core/controller';
import UserService from '../services/userService'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Env from '../../config/env';
const userService = new UserService();
const SECRET_KEY = 'secretkey23456';

class AuthController {
  constructor() {
    //super();
  }

  register(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password);

    userService.create([name, email, password], (err, user) => {
      if (err) return res.status(500).send("Server error!");
      console.log("created user", user)
      const expiresIn = 24 * 60 * 60;
      const accessToken = jwt.sign({
        name: user.name,
        id: user.id
      }, Env.jwtSecret, {
        expiresIn: Env.jwtExpiresIn,
        issuer: Env.jwtIssuer
      });
      res.status(200).send({
        "user": user,
        "access_token": accessToken,
        "expires_in": expiresIn
      });
    });
  }

  login(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    userService.findByEmail(email, (err, user) => {
      if (err) return res.status(500).send('Server error!');
      if (!user) return res.status(404).send('User not found!');
      const result = bcrypt.compareSync(password, user.password);
      if (!result) return res.status(401).send('Password not valid!');

      const payload = {
        id: user.id,
        user: user.name
      };
      const options = {
        expiresIn: Env.jwtExpiresIn,
        issuer: Env.jwtIssuer
      };
      const token = jwt.sign(payload, Env.jwtSecret, options);
      res.status(200).send({
        "user": user,
        "access_token": token,
        "expires_in": options.expiresIn
      });
    });
  }
}
export default AuthController;