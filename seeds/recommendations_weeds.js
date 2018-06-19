exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('recommendations_weeds').del()
    .then(() => {
      // Inserts seed entries
      return knex('recommendations_weeds').insert([
        {
          id: 20,
          recommendation_id: 1,
          weed_id: 10
        },
        {
          id: 21,
          recommendation_id: 1,
          weed_id: 15
        },
        {
          id: 22,
          recommendation_id: 1,
          weed_id: 20
        },
        {
          id: 23,
          recommendation_id: 2,
          weed_id: 35
        },
        {
          id: 24,
          recommendation_id: 2,
          weed_id: 40
        },
        {
          id: 25,
          recommendation_id: 3,
          weed_id: 20
        }
      ])
    })
}
