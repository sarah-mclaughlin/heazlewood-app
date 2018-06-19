// exports.up = knex => knex.schema.createTable('weeds', table => {
//   table.increments('id').primary()
//   table.string('name')
// })

// exports.down = knex => knex.schema.dropTable('weeds')

exports.up = (knex, Promise) => {
  return knex.schema.createTable('weeds', table => {
    table.increments('id').primary()
    table.string('name')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('weeds')
}
