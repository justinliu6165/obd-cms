module.exports = ({ env }) => {
  if(env('NODE_ENV') === 'production') {
    return ({
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'mongoose',
          settings: {
            uri: env('DATABASE_URI'),
            database: "obd-db"
          },
          options: {
            ssl: true,
          },
        },
      },
    });
  } else {
    return ({
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'mongoose',
          settings: {
            client: "mongo",
            host: "localhost",
            port: "27017",
            database: "obd-local-db",
            username: "",
            password: ""
          },
          options: {
            ssl: false,
          },
        },
      },
    });
  }
}
