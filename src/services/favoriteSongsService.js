const prismaClient = require('../prisma/index.js')

class FavoriteSongsService {
   async create(user_id, songName, artist, album) {
      const createdFavoriteSong = await prismaClient.favoriteSong.create({
         data: {
            song_name: songName,
            artist,
            album,
            user_id,
         }
      })

      return createdFavoriteSong
   }

   async show(user_id, songName, artist, album) {
      const favoritesSongs = await prismaClient.favoriteSong.findMany({
         where: {
            user_id: user_id,
            AND: [
               {
                  song_name: {
                     contains: songName,
                     mode: 'insensitive'
                  }
               },
               {
                  artist: {
                     contains: artist,
                     mode: 'insensitive'
                  }
               },
               {
                  album: {
                     contains: album,
                     mode: 'insensitive'
                  }
               }
            ]
         }
      })

      return favoritesSongs
   }

   async update(user_id, favorite_id, songName, artist, album) {
      const updatedFavoriteSong = await prismaClient.favoriteSong.updateMany({
         where: {
            user_id,
            favorite_id
         },
         data: {
            song_name: songName,
            artist,
            album
         }
      })

      return updatedFavoriteSong
   }

   async delete(user_id, favorite_id) {
      const favoriteSong = await prismaClient.favoriteSong.deleteMany({
         where: {
            user_id,
            favorite_id
         }
      })

      return favoriteSong
   }
}

module.exports = FavoriteSongsService