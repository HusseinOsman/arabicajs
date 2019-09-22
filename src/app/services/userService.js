import User from '../models/user';
const user = new User();

class UserService {
  constructor() {}

  create(data, cb) {
    const newUser = user();
    newUser.name = data[0];
    newUser.email = data[1];
    newUser.password = data[2];

    return newUser.save((err, created) => {
      cb(err, created);
    });
  }

  findById(id, cb) {
    user.find(id, function (err, data) {
      cb(err, data)
    });
  }

  findByEmail(email, cb) {
    user.findOne({
      where: {
        email: email
      }
    }, function (err, data) {
      cb(err, data)
    });
  }

}
export default UserService;