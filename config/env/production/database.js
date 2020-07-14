module.exports = ({ env }) => ({
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