const express = require('express')

const db = require('../db')

const router = express.Router()

router.use(express.json())

router.get('/recommendations', (req, res) => {
  db.getRecommendations()
    .then(results => {
      const recommendations = formatResults(results)
      res.json({recommendations})
    })
    .catch(err => {
      res.status(500).json({errorMessage: err.message})
    })
})

router.get('/weeds', (req, res) => {
  db.getWeeds()
    .then(weeds => {
      res.json({weeds})
    })
    .catch(err => {
      res.status(500).json({errorMessage: err.message})
    })
})

router.get('/insects', (req, res) => {
  db.getInsects()
    .then(insects => {
      res.json({insects})
    })
    .catch(err => {
      res.status(500).json({errorMessage: err.message})
    })
})

function formatResults (results) {
  const formatted = []
  results.forEach(result => {
    if (!formatted.some(item => item.id === result.id)) {
      formatted.push({
        id: result.id,
        date: result.date,
        growerName: result.growerName,
        crop: result.crop,
        cropStage: result.cropStorage,
        paddockName: result.paddockName,
        paddockReport: result.paddockReport,
        recommendation: result.recommendation,
        applicationDetails: result.applicationDetails,
        precautions: result.precautions,
        fertilizer: result.fertilizer,
        livestock: result.livestock,
        diseases: result.diseases,
        weeds: [result.weedName],
        otherWeeds: result.otherWeeds,
        insects: [result.insectName],
        chemicals: [{
          chemicalId: result.chemicalId,
          chemicalName: result.chemicalName,
          chemicalDosage: result.chemicalDosage
        }]
      })
    } else {
      const existing = formatted.find(item => item.id === result.id)

      if (!existing.chemicals.some(chemical => chemical.chemicalId === result.chemicalId)) {
        existing.chemicals.push({
          chemicalId: result.chemicalId,
          chemicalName: result.chemicalName,
          chemicalDosage: result.chemicalDosage
        })
      }

      if (!existing.weeds.includes(result.weedName)) {
        existing.weeds.push(result.weedName)
      }

      if (!existing.insects.includes(result.insectName)) {
        existing.insects.push(result.insectName)
      }
    }
  })
  return formatted
}

module.exports = router
