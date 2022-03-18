const AuthenticateService = require('../services/authenticateService.js')

const service = new AuthenticateService()

class AuthenticateController {
   async handleLogin(req, res) {
      const { email, password } = req.body

      try {
         const result = await service.handleLogin(email, password)

         return res.status(200).json({ token: result })
      } catch (error) {
         return res.status(400).json({ error: error.message })
      }
   }
}

module.exports = AuthenticateController