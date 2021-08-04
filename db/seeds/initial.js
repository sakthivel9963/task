const tableNames = require('../../src/constants/tableNames');

const seedValue = async (knex, tableName, data) => {
  await knex(tableName).del();
  await knex(tableName).insert(data);
};

exports.seed = async (knex) => {
  const userData = [
    {
      email: 'user1@gmail.com',
      name: 'user1',
      password: 'user@123',
    },
    {
      email: 'user2@gmail.com',
      name: 'user2',
      password: 'user@123',
    },
    {
      email: 'user3@gmail.com',
      name: 'user3',
      password: 'user@123',
    },
  ];

  const cabData = [
    {
      driver_name: 'driver1',
      vehicle_number: '389339',
      vehicle_colour: 'black',
    },
    {
      driver_name: 'driver2',
      vehicle_number: '389338',
      vehicle_colour: 'black',
    },
    {
      driver_name: 'driver3',
      vehicle_number: '389337',
      vehicle_colour: 'black',
    },
  ];

  const bookingData = [
    {
      user_id: 1,
      cab_id: 1,
      pickup_location: 'mumbai',
      drop_location: 'delhi',
    },
    {
      user_id: 1,
      cab_id: 2,
      pickup_location: 'mumbai',
      drop_location: 'chennai',
    },
    {
      user_id: 1,
      cab_id: 3,
      pickup_location: 'mumbai',
      drop_location: 'kochin',
    },
    {
      user_id: 2,
      cab_id: 1,
      pickup_location: 'mumbai',
      drop_location: 'delhi',
    },
  ];

  // await knex(tableNames.USER).del();
  // await knex(tableNames.USER).insert(userData);
  // await knex(tableNames.CAB).del();
  // await knex(tableNames.CAB).insert(cabData);
  // await knex(tableNames.BOOKING).del();
  // await knex(tableNames.BOOKING).insert(bookingData);
  await seedValue(knex, tableNames.USER, userData);
  await seedValue(knex, tableNames.CAB, cabData);
  await seedValue(knex, tableNames.BOOKING, bookingData);
};
