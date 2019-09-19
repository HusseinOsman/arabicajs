import Model from '../../core/model';

class User extends Model {
  constructor() {
    super();
    const model = this.schema.define(this.tableName, {
      name: {
        type: String,
        length: 255
      },
      password: {
        type: String,
        length: 255
      },
      created_at: {
        type: Date,
        default: function () {
          return new Date;
        }
      },
      updated_at: {
        type: Date,
        default: function () {
          return new Date;
        }
      },
    });

    this.schema.models.model;

    return new model();
  }

}
export default User;