const { Router } = require('express')

const FavoriteSongsController = require('./controllers/favoriteSongsController.js')
const AuthenticateController = require('./controllers/authenticateController.js')
const confirmAuthenticity = require('./middleware/confirmAuthenticity.js')

const router = Router()

router.post('/login', new AuthenticateController().handleLogin)

router.get('/favorite-songs', confirmAuthenticity, new FavoriteSongsController().show)
router.post('/favorite-songs', confirmAuthenticity, new FavoriteSongsController().create)
router.put('/favorite-songs/:favoriteId', confirmAuthenticity, new FavoriteSongsController().update)
router.delete('/favorite-songs/:favoriteId', confirmAuthenticity, new FavoriteSongsController().delete)

module.exports = router