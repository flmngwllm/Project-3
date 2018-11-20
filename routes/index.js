const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const listController = require('../controllers/listController')
const gameController = require('../controllers/gameController')

// require controllers here
// router.get('/', application.index)


router.get('/api/users', userController.index)
router.post('/api/users', userController.create)
router.get('/api/users/:userId',userController.show)
router.patch('/api/users/:userId', userController.update)
router.delete('/api/users/:userId', userController.delete)


router.get('/api/users/:userId/lists', listController.index)
router.post('/api/users/:userId/lists', listController.create)
router.get('/api/lists/:listId',listController.show)
router.patch('/api/lists/:listId', listController.update)
router.delete('/api/lists/:listId', listController.delete)

// router.get('/api/users/:userId/lists/:listId/games', gameController.index)
// router.get('/api/games', gameController.api)
// router.get('/api/lists/:listId',listController.show)
// router.delete('/api/lists/:listId', listController.delete)

module.exports = router