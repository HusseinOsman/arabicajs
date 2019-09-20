import Database from '../config/database';
class Model extends Database {
  constructor() {
    super();
    this._child = new.target.name;
  }

  get tableName() {
    let spName = this._child.split('');
    if (this._child.slice(-1) === 'y') {
      spName.pop();
      this._child = `${spName.join('')}ies`;
    } else
      this._child = `${this._child}s`
    return this.customTableName || `${this._child}`;
  }

  get customTableName() {
    return null;
  }

}
export default Model;