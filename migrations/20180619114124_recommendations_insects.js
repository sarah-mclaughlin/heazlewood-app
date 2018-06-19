exports.up = knex => knex.schema.createTable('recommendations_insects', table => {
  table.increments('id').primary()
  table.integer('recommendation_id').references('recommendations.id').notNullable()
  table.integer('insect_id').references('insects.id').notNullable()
})

exports.down = knex => knex.schema.dropTable('recommendations_insects')
