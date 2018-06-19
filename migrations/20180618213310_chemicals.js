exports.up = knex => knex.schema.createTable('chemicals', table => {
  table.increments('id').primary()
  table.string('name')
  table.string('dosage')
  table.integer('recommendation_id').references('recommendations.id').notNullable()
})

exports.down = knex => knex.schema.dropTable('chemicals')
