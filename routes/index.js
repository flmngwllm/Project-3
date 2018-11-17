const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

// require controllers here
// router.get('/', application.index)


router.get('/api/users', userController.index)
router.post('/api/users', userController.create)
router.get('/api/users/:userId',userController.show)
router.patch('/api/users/:userId', userController.update)
router.delete('/api/users/:userId', userController.delete)


router.get('/api/users/:userId/list', listController.index)
router.post('/api/users/:userId/list', listController.create)
router.get('/api/users/:userId/list/:listId',listController.show)
router.patch('/api/users/:userId/list/:listId', listController.update)
router.delete('/api/users/:userId/list/:listId', listController.delete)


module.exports = router