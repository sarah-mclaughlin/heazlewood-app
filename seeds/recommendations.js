exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('recommendations').del()
    .then(() => {
      // Inserts seed entries
      return knex('recommendations').insert([
        {
          id: 1,
          date: '18/06/2018',
          grower_name: 'John',
          crop: 'clover',
          crop_stage: 'stage one',
          paddock_name: 'front',
          paddock_report: 'good',
          recommendation: 'put on more soil',
          application_details: 'apply weekly',
          precautions: 'do not over do',
          fertilizer: 'lime',
          livestock: 'cattle',
          diseases: 'pepper spot',
          other_weeds: 'maple peas'
        },
        {
          id: 2,
          date: '18/06/2018',
          grower_name: 'John',
          crop: 'clover',
          crop_stage: 'stage one',
          paddock_name: 'front',
          paddock_report: 'good',
          recommendation: 'put on more soil',
          application_details: 'apply weekly',
          precautions: 'do not over do',
          fertilizer: 'lime',
          livestock: 'cattle',
          diseases: 'sclerotinia and stem rust'
        },
        {
          id: 3,
          date: '18/06/2018',
          grower_name: 'John',
          crop: 'clover',
          crop_stage: 'stage one',
          paddock_name: 'front',
          paddock_report: 'good',
          recommendation: 'put on more soil',
          application_details: 'apply weekly',
          precautions: 'do not over do',
          fertilizer: 'lime',
          livestock: 'cattle'
        }
      ])
    })
}
