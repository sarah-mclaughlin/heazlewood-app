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

function addRecommendation (recommendation, conn = connection) {
  return conn('recommendations')
    // .join('chemicals', 'recommendations.id', '=', 'chemicals.recommendation_id')
    // .join('recommendations_weeds', 'recommendations.id', '=', 'recommendations_weeds.recommendation_id')
    // .join('recommendations_insects', 'recommendations.id', '=', 'recommendations_insects.recommendation_id')
    .insert({
      'date': recommendation.date,
      'grower_name': recommendation.growerName,
      'crop': recommendation.crop,
      'crop_stage': recommendation.cropStage,
      'paddock_name': recommendation.paddockName,
      'paddock_report': recommendation.paddockReport,
      'recommendation': recommendation.recommendation,
      'application_details': recommendation.applicationDetails,
      'precautions': recommendation.precautions,
      'fertilizer': recommendation.fertilizer,
      'livestock': recommendation.livestock,
      'diseases': recommendation.diseases,
      'other_weeds': recommendation.otherWeeds
      // 'recommendations_weeds': recommendation.weeds.forEach(weed => weed.weedName),
      // 'insects.name as insectsName',
      // 'chemicals.name': recommendation.chemicalName,
      // 'chemicals.dosage': recommendation.chemicalDosage
    })
}

function addChemicals (id, chemical, conn = connection) {
  return conn('chemicals')
    .returning('recommendation_id')
    .insert({
      'name': chemical.chemicalName,
      'dosage': chemical.chemicalDosage,
      'recommendation_id': id
    })
}

function addWeeds (id, weed, conn = connection) {
  return conn('recommendations_weeds')
    .returning('recommendation_id')
    .insert({
      'weed_id': weed.weedId,
      'recommendation_id': id
    })
}

function addInsects (id, insect, conn = connection) {
  return conn('recommendations_insects')
    .insert({
      'insect_id': insect.insectId,
      'recommendation_id': id
    })
}

// exports.up = (knex, Promise) => {
//   return knex('users')
//     .insert({first_name: 'John', last_name: 'Doe'})
//     .then((res) => {
//       return knex('groups')
//         .insert({name: 'Cool Group', user_id: res[0]})
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
  getInsects,
  // editRecommendation,
  addRecommendation,
  addChemicals,
  addWeeds,
  addInsects
  // deleteChemical
}
