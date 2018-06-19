exports.up = knex => knex.schema.createTable('insects', table => {
  table.increments('id').primary()
  table.string('name')
})

exports.down = knex => knex.schema.dropTable('insects')
