const mysql = require('mysql2')
const { Umzug, SequelizeStorage } = require('umzug');

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('student', 'root', 'Ahmed@7812', {
  port: 3306,
  host: 'localhost',
  dialect: 'mysql',
});



const setupDatabase = async () => {
  try {
      await sequelize.authenticate();
      await runMigrations();
      // await connectToDatabase(createConnection())
      console.log('database connected')
  } catch (err) {
      console.log(err, 'connecting database failed')
  }

  return null
}

const migrationConf = {
  migrations: {
      glob: 'migrations/*.js',
  },
  storage: new SequelizeStorage({ sequelize, tableName: 'applied_migrations', timestamps: true }),
  context: sequelize.getQueryInterface(),
  logger: console,
}
const runMigrations = async () => {
  const migrator = new Umzug(migrationConf)
  const migrations = await migrator.up()
  console.log('Migrations up to date', {
      files: migrations.map((mig) => mig.name),
  })
}

const rollbackMigration = async () => {
  await sequelize.authenticate()
  const migrator = new Umzug(migrationConf)
  await migrator.down({ to:0 })
}


function createConnection() {
  return mysql.createConnection({
    host: 'localhost',     
    user: 'root',  
    password: 'Ahmed@7812',  
    database: 'student' 
  });
}

function closeConnection(connection) {
  connection.end(err => {
    if (err) {
      console.error('Error closing the connection:', err);
    } else {
      console.log('Connection has been closed.');
    }
  });
}

function connectToDatabase(connection) {
  connection.connect(err => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Connected to MySQL server.');
    }
  });
}


module.exports = { createConnection, connectToDatabase, closeConnection, sequelize, setupDatabase };
