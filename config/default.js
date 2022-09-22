module.exports = {
  app: {
    environment: 'development',
    port: 8080,
    apiHost: 'http://localhost:8080',
    recruitmentHost: 'http://localhost:8010',
    clientHost: 'http://localhost:8000',
    sessionSecret: 'sessionSecret',
    encryptionKey: 'encryptionKey',
    persistentSessionTTL: 2592000000,
    uploadDir: './public/upload',
    redis: {
      host: 'localhost',
      port: '6379',
      pass: '',
    },
    passwordSalt: '*(b^4G&V4ds,%3',
    bucket: {
      name: '',
      key: '',
      secretKey: '',
    },
  },
  db: {
    host: 'localhost',
    port: 5432,
    database: '',
    username: null,
    password: null,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false,
    dialect: '',
    dialectOptions: {
      ssl: false,
    },
    ssl: false,
  },
};
