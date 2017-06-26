// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/my_list'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};

// development: {
//   client: 'postgresql',
//   connection: 'postgres://localhost/my_life',
// }

// staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user: 'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },
//
//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user: 'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }
