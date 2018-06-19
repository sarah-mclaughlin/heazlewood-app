exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('insects').del()
    .then(() => {
      // Inserts seed entries
      return knex('insects').insert([
        {
          id: 100,
          name: 'Aphids'
        },
        {
          id: 101,
          name: 'Armyworm'
        },
        {
          id: 102,
          name: 'Cutworm'
        },
        {
          id: 103,
          name: 'Corbie'
        },
        {
          id: 104,
          name: 'Cockchafer - Black Head'
        },
        {
          id: 105,
          name: 'Cockchafer - Red Head'
        },
        {
          id: 106,
          name: 'Heliothis'
        },
        {
          id: 107,
          name: 'Lucerne Flea'
        },
        {
          id: 108,
          name: 'Red Legged Earth Mite'
        },
        {
          id: 109,
          name: 'Thrips'
        }
      ])
    })
}
