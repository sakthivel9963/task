const Knex = require('knex');

const tableNames = require('../../src/constants/tableNames');

function addDefaultColumn(table) {
  table.timestamps(false, true);
  table.integer('created_by');
  table.integer('updated_by');
  table.integer('deleted_by');
  table.datetime('deleted_at');
}

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.USER, (table) => {
    table.increments();
    table.string('email', 254).unique();
    table.string('name', 254).unique();
    table.string('password', 254);
    addDefaultColumn(table);
  });
  await knex.schema.createTable(tableNames.CAB, (table) => {
    table.increments();
    table.string('driver_name', 254);
    table.string('vehicle_number', 254).unique();
    table.string('vehicle_colour', 254);
    addDefaultColumn(table);
  });
  await knex.schema.createTable(tableNames.BOOKING, (table) => {
    table.increments();
    table.integer('user_id');
    table.integer('cab_id');
    table.string('pickup_location', 254);
    table.string('drop_location', 254);
    addDefaultColumn(table);
  });
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  const tableName = Object.values(tableNames);
  await Promise.all(
    tableName.map((tablename) => knex.schema.dropTableIfExists(tablename)),
  );
};
