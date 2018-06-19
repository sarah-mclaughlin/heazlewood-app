const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function getRecommendations (conn = connection) {
  return conn('recommendations')
    .join('chemicals', 'recommendations.id', '=', 'chemicals.recommendation_id')
    .join('recommendations_weeds', 'recommendations.id', '=', 'recommendations_weeds.recommendation_id')
    .join('weeds', 'weeds.id', '=', 'recommendations_weeds.weed_id')
    .join('recommendations_insects', 'recommendations.id', '=', 'recommendations_insects.recommendation_id')
    .join('insects', 'insects.id', '=', 'recommendations_insects.insect_id')
    .select(
      'recommendations.id as id',
      'date as date',
      'grower_name as growerName',
      'crop as crop',
      'crop_stage as cropStage',
      'paddock_name as paddockName',
      'paddock_report as paddockReport',
      'recommendation as recommendation',
      'application_details as applicationDetails',
      'precautions as precautions',
      'fertilizer as fertilizer',
      'livestock as livestock',
      'diseases as diseases',
      'weeds.name as weedName',
      'other_weeds as otherWeeds',
      'insects.name as insectsName',
      'chemicals.id as chemicalId',
      'chemicals.name as chemicalName',
      'chemicals.dosage as chemicalDosage'
    )
}

function getWeeds (conn = connection) {
  return conn('weeds')
    .select(
      'id as weedId',
      'name as weedName'
    )
}

function getInsects (conn = connection) {
  return conn('insects')
    .select(
      'id as insectId',
      'name as insectName'
    )
}

// function editRecommendation (recommendationId, conn = connection) {
//   return conn('recommendations')
//     .where('id', '=', recommendationId)
//     .update({is_complete: true})
// }

// function addRecommendation (conn = connection) {
//   return conn('recommendations')
//     .insert({
//       is_complete: false
//     })
// }

// function deleteChemical (itemId, conn = connection) {
//   return conn('recommendations_chemicals')
//     .where('id', '=', itemId)
//     .del()
// }

module.exports = {
  getRecommendations,
  getWeeds,
  getInsects
  // editRecommendation,
  // addRecommendation,
  // deleteChemical
}
