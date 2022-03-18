const FavoriteSongsService = require('../services/favoriteSongsService.js')

const service = new FavoriteSongsService()

class FavoriteSongsController {
   async create(req, res) {
      const { songName, artist, album } = req.body
      const { user_id } = req

      try {
         const result = await service.create(user_id, songName, artist, album)

         return res.status(201).json(result)
      } catch (error) {
         return res.status(400).json({ error: error.message })
      }
   }

   async show(req, res) {
      const { songName, artist, album } = req.query
      const { user_id } = req

      try {
         const result = await service.show(user_id, songName, artist, album)

         return res.status(200).json(result)
      } catch (error) {
         return res.status(400).json({ error: error.message })
      }
   }

   async update(req, res) {
      const { favoriteId } = req.params
      const { songName, artist, album } = req.body
      const { user_id } = req

      try {
         const result = await service.update(user_id, parseInt(favoriteId), songName, artist, album)

         return res.json(result)
      } catch (error) {
         return res.status(400).json({ error: error.message })
      }
   }

   async delete(req, res) {
      const { favoriteId } = req.params
      const { user_id } = req

      try {
         const result = await service.delete(user_id, parseInt(favoriteId))

         return res.json(result)
      } catch (error) {
         return res.status(400).json({ error: error.message })
      }
   }
}

module.exports = FavoriteSongsController