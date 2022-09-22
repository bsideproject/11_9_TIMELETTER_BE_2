const createAuthMiddleware = f => (req, res, next) =>
  f(req) ? next() : res.status(401).send('Unauthorized');


const needsLogin = req => req.user;

module.exports = {
   needsLogin: createAuthMiddleware(needsLogin),
}
