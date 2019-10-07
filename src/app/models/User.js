module.exports = {
  identity: 'Users',
  datastore: 'default',
  primaryKey: 'id',
  attributes: {
      id: {
          type: 'string',
          columnName: '_id'
      },
      name: {
          type: 'string'
      },
      password: {
          type: 'string'
      },
      email: {
          type: 'string'
      },

      sessions: {
          type: 'json'
      }
  }
};