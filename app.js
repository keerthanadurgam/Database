const { Sequelize, DataTypes } = require('sequelize');

// Passing parameters separately
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

const Spacestation = sequelize.define(
  'Spacestation',
  {
    Spacestation_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    Spacestation_name: {
      type: DataTypes.STRING,
      allownull: false,
    },
   Year:{
    type: DataTypes.INTEGER,
    allownull: false,
   },
   No_of_satelites: {
    type: DataTypes.INTEGER,
    allownull: false,
   },
  },
);
console.log(Spacestation === sequelize.models.Spacestation); 

const Satellites = sequelize.define(
    'Satellites',
    {
      Satellite_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Satellite_name: {
        type: DataTypes.STRING,
        allownull: false,
      },
     Launched_year:{
      type: DataTypes.INTEGER,
      allownull: false,
     },
     Spacestation_id: {
      type: DataTypes.INTEGER,
      allownull: false,
      references: 'spacestation',
      referencesKey: 'spacestation_id',
    },
   },
  );
  console.log(Satellites === sequelize.models.Satellites);
