const { verify } = require('jsonwebtoken')

function confirmAuthenticity(req, res, next) {
   // Recebe o token
   const authToken = req.headers.authorization

   // Verifica se tem algo preenchido dentro do token
   if (!authToken) {
      // Se não estiver preenchido, devolve uma mensagem de token inválido
      return res.status(401).json({
         errorCode: 'token.invalid'
      })
   }

   // Caso esteja preenchido, o token precisará ser desestruturado
   // Exemplo de token: 'Bearer 54684651263a51sd53ad3s5d16'
   const [, token] = authToken.split(' ')

   try {
      // Verifica se é um token válido, e caso seja, armazena o user_id (chamado de sub no retorno do verify) em uma variável
      const { user } = verify(token, process.env.JWT_SECRET)

      // Armazena o user_id no Request para ser usado no próximo passo da requisição
      req.user_id = user.id

      // Passa o Middleware para frente
      return next()
   } catch (error) {
      return res.status(401).json({ errorCode: 'token.expired' })
   }
}

module.exports = confirmAuthenticity