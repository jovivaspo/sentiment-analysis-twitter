const {Router} = require('express')
const ctrUser = require('../controllers/userController')

const router = Router()

router.route('/search/:username')
.get(ctrUser.search)

router.route('/tweets/:id/:time')
.get(ctrUser.tweets)

router.route('/tweets/analyse')
.post(ctrUser.analyse)

module.exports = router