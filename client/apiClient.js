import request from 'superagent'

const rootUrl = '/api/v1/recommendations'

export function getFruits () {
  return request.get(rootUrl + '/fruits')
    .then(res => {
      return res.body.fruits
    })
}
