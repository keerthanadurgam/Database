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
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
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
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
      },
      name: {
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
      references:{
        model: Spacestation,
         Key: 'id',
    },
   },
  });
  Spacestation.hasMany(Satellites, { foreignKey: 'Spacestation_id' });
  Satellites.belongsTo(Spacestation, { foreignKey: 'Spacestation_id' });

  console.log(Satellites === sequelize.models.Satellites);
  
  sequelize.sync()
  .then(() => {
    console.log('Database & tables synced!');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });


  const Insertspacestations = async()=>{
    try{
      const stations= await Spacestation.bulkCreate([
        {Spacestation_id: 21, name: 'NASA', Year: 2023, No_of_satelites: 72},
        {Spacestation_id:23, name: 'ISRO',Year:2023,No_of_satelites: 7 }
      ]);
      console.log("stations created successfully");
      return stations;
    }catch(err){
      console.error("error in inserting data")
      return null;
    };
  }
    Insertspacestations();
  
    const Insertsatellites = async()=>{
      try{
        const satellites= await Satellites.bulkCreate([
          {id:1, name:"chandrayan3",Launched_year:2023,Spacestation_id:23},
          {id:2, name: "capstone",Launched_year:2023,Spacestation_id:21}
        ]);
        console.log("satelites table created successfully");
        return satellites;
      }catch(err){
        console.error("error in inserting data")
        return null;
      };
    }
      Insertsatellites();
  