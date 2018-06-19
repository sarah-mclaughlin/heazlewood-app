exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('chemicals').del()
    .then(() => {
      // Inserts seed entries
      return knex('chemicals').insert([
        {
          id: 1000,
          name: 'Agritone',
          dosage: '50ml',
          recommendation_id: 1
        },
        {
          id: 1001,
          name: 'Lime',
          dosage: '1L',
          recommendation_id: 1
        },
        {
          id: 1002,
          name: 'Nitrogen',
          dosage: '10L',
          recommendation_id: 2
        },
        {
          id: 1003,
          name: 'Roundup',
          dosage: '10ml',
          recommendation_id: 2
        },
        {
          id: 1004,
          name: 'Lime',
          dosage: '10kg',
          recommendation_id: 3
        },
        {
          id: 1005,
          name: 'Paradigm',
          dosage: '10ml',
          recommendation_id: 3
        }
      ])
    })
}
