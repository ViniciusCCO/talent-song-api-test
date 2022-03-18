const { Router } = require('express')

const FavoriteSongsController = require('./controllers/favoriteSongsController.js')
const AuthenticateController = require('./controllers/authenticateController.js')
const confirmAuthenticity = require('./middleware/confirmAuthenticity.js')

const favoriteSongsController = new FavoriteSongsController()
const authenticateController = new AuthenticateController()

const router = Router()

router.post('/login', authenticateController.handleLogin)

router.get('/favorite-songs', confirmAuthenticity, favoriteSongsController.show)
router.post('/favorite-songs', confirmAuthenticity, favoriteSongsController.create)
router.put('/favorite-songs/:favoriteId', confirmAuthenticity, favoriteSongsController.update)
router.delete('/favorite-songs/:favoriteId', confirmAuthenticity, favoriteSongsController.delete)

module.exports = router