class UserService {
  constructor() {}
  async create(req, data, cb) {
    const newUser = {};
    newUser.name = data[0];
    newUser.email = data[1];
    newUser.password = data[2];
    const user = await req.app.models.users.create(newUser).fetch();
    cb(null, user);
  }

  async findById(req, id, cb) {
    const user = await req.app.models.users.findOne({
      id: id
    })
    cb(user)
  }

  async findByEmail(req, email, cb) {
    const user = await req.app.models.users.findOne({
      email: email
    });
    cb(null, user);
  }

  async updateSessions(req, user, session, cb) {

    let sessions = user.sessions || [];
    sessions.push(session);
    user.sessions = sessions;

    let updatedUser = await req.app.models.users.updateOne({
        id: user.id
      })
      .set({
        sessions: sessions
      });

    cb(null, updatedUser);
  }

  async update(req, user, cb) {

    const updated = await req.app.models.users.updateOne({
        id: user.id
      })
      .set(user);

    cb(null, updated);
  }

}
export default UserService;