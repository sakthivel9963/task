const DefaultRepository = require('./knexDefault');
// const connection = require('../../config/db');

class UserRepository extends DefaultRepository {
  // static find(tableName, whereObj = {}) {
  //   return connection.table(tableName).where(whereObj);
  // }
}

module.exports = UserRepository;
