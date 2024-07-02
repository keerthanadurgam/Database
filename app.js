const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately
const sequelize = new Sequelize('database24', 'keerthana', 'Keerthana1', {
  host: 'localhost',
  dialect: 'postgres' 
});
//authenticate the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection to PostgreSQL has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
