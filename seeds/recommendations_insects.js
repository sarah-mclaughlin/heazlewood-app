exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('recommendations_insects').del()
    .then(() => {
      // Inserts seed entries
      return knex('recommendations_insects').insert([
        {
          id: 200,
          recommendation_id: 1,
          insect_id: 100
        },
        {
          id: 201,
          recommendation_id: 1,
          insect_id: 102
        },
        {
          id: 202,
          recommendation_id: 1,
          insect_id: 104
        },
        {
          id: 203,
          recommendation_id: 2,
          insect_id: 105
        },
        {
          id: 204,
          recommendation_id: 2,
          insect_id: 108
        },
        {
          id: 205,
          recommendation_id: 3,
          insect_id: 102
        }
      ])
    })
}
