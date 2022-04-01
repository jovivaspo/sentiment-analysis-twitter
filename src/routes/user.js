const {Router} = require('express')
const ctrUser = require('../controllers/userController')

const router = Router()

router.route('/search/:username')
.get(ctrUser.search)

router.route('/analyse')
.get(ctrUser.analyse)

module.exports = router