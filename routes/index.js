const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

//require controllers here
router.get('/', application.index)


router.get('/api/users', userController.index)
router.post('api/users/', userController.create)
router.get('api/users/:userId',userController.show)
router.patch('api/users/:userId', userController.update)
router.delete('api/users/:userId', userController.delete)


// router.get()
// router.post()
// router.get()
// router.patch()
// router.delete()


module.exports = router