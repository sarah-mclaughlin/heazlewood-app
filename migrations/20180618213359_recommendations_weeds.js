exports.up = knex => knex.schema.createTable('recommendations_weeds', table => {
  table.increments('id').primary()
  table.integer('recommendation_id').references('recommendations.id').notNullable()
  table.integer('weed_id').references('weeds.id').notNullable()
})

exports.down = knex => knex.schema.dropTable('recommendations_weeds')
