const rp = require('request-promise')

module.exports.vkOauth = async (req, res) => {
  const response = await rp.get('https://api.vk.com/method/users.get', {
    qs: {
      user_ids: req.body.user_id,
      fields: 'photo_max_orig,screen_name',
      access_token: req.body.access_token,
      v: '5.103'
    }
  })

  res.json(JSON.parse(response).response[0])
}
