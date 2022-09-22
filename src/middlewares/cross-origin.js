const mode = require('../lib/mode');

const crossOrigin = (req, res, next) => {
  const origin = req.headers.origin || req.headers.host;

  const regex = /^(?:(.+).)?(timeletter\.com|timeletter\.net)$/i;

  const allow = regex.test(origin) || mode.dev();

  const devEnviropment = mode.dev();

  if (allow || devEnviropment) {
    res.header('Access-Control-Allow-Origin', origin);
  } else {
    next();
    return;
  }

  res.header(
    'Access-Control-Allow-Methods',
    'POST, PUT, GET, DELETE, PATCH, OPTIONS',
  );
  res.header(
    'Access-Control-Allow-Headers',
    'x-mn-api-version, Content-Type, X-Requested-With',
  );
  res.header('Access-Control-Allow-Credentials', true);

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
};

module.exports = crossOrigin;
