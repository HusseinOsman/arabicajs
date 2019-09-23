import User from '../models/user';
import bcrypt from 'bcryptjs';

const model = new User();

class UserService {
  constructor() {
    this.modelHooks();
  }

  modelHooks() {
    model.beforeCreate = function (next, data) {
      // use data argument to hash password
      data.password = bcrypt.hashSync(data.password);
      next();
    };
  }

  create(data, cb) {
    const newUser = model();
    newUser.name = data[0];
    newUser.email = data[1];
    newUser.password = data[2];

    return newUser.save((err, created) => {
      cb(err, created);
    });
  }

  findById(id, cb) {
    model.find(id, function (err, data) {
      cb(err, data)
    });
  }

  findByEmail(email, cb) {
    model.findOne({
      where: {
        email: email
      }
    }, function (err, data) {
      cb(err, data)
    });
  }

  updateSessions(id, session, cb) {
    model.find(id, function (err, data) {
      let sessions = data.sessions || [];
      sessions.push(session);
      data.sessions = sessions;
      return data.save((err, updated) => {
        cb(err, updated);
      });
    });
  }

}
export default UserService;