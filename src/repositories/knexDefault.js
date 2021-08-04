const connection = require('../db');

class DefaultRepository {
  static find(tableName, whereObj = {}, paginateObj = {}) {
    return connection.table(tableName).where(whereObj).paginate(paginateObj);
  }

  static findOne(tableName, whereObj) {
    return connection.table(tableName).where(whereObj);
  }

  static count(tableName) {
    return connection.table(tableName).count('id', { as: 'count' });
  }

  static save(tableName, saveObj) {
    return connection.table(tableName).insert(saveObj);
  }

  static update(tableName, updateObj, whereObj) {
    return connection.table(tableName).where(whereObj).update(updateObj);
  }

  static delete(tableName, deleteObj) {
    return connection.table(tableName).where(deleteObj).delete();
  }
}

module.exports = DefaultRepository;
