const path = require('path')
const dbPath = path.resolve(__dirname, 'db/database.sqlite')
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: dbPath,
    },
    useNullAsDefault: true
});



knex.schema
  .hasTable('cards')
    .then((exists) => {
      if (!exists) {
    // create new table with columns
    // id is primary identification
        return knex.schema.createTable('cards', (table)  => {
          table.increments('id').primary()
          table.string('pic')
          table.string('sound')
          table.string('categoryId')
          table.string('name')
        })
        .then(() => {
          // Log success message
          console.log('Table \'Cards\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

//knex = require('knex')({client: 'sqlite3' });
knex.from('users').select().where('id', '=', 2).toSQL();
// Just for debugging purposes:
// Log all data in "cards" table
knex.select('*').from('cards')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))



// Export the database
module.exports = knex