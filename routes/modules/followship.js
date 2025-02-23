const express = require('express')
const router = express.Router()
const followshipController = require('../../controllers/followship-controller')

router.delete('/:followingId', followshipController.deleteFollowing)
router.post('/', followshipController.addFollowship)


module.exports = router