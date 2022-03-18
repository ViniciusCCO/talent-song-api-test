const prismaClient = require('../prisma/index.js')
const { sign } = require('jsonwebtoken')

class AuthenticateService {
   async handleLogin(email, password) {
      const user = await prismaClient.user.findFirst({
         where: {
            email,
            password
         }
      })

      if (!user) {
         throw new Error('Email or password invalid!')
      }

      // Criar um token
      const token = sign(
         {
            user: {
               email: user.email,
               password: user.password,
               id: user.user_id
            },
         },
         process.env.JWT_SECRET,
         {
            subject: user.email,
            expiresIn: '1d'
         }
      )

      return token
   }
}

module.exports = AuthenticateService