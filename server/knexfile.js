require('dotenv').config();

module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/my_list'
  },
  production: {
    client: 'pg',
    connection: 'postgres://yprtbmiqntkawu:d4b163bf3ed2c348f7fb157b9b7a4b416220b4262a943bed1ed91ff7e22daac6@ec2-184-73-236-170.compute-1.amazonaws.com:5432/da1ar8hqkb786o' + '?ssl=true'
  }
};

// connection: process.env.DATABASE_URL + '?ssl=true'

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
