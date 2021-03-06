module.exports = {
   "type": "mysql",
   "host": "db",
   "port": 3306,
   "username": "{{ DB_USER }}",
   "password": "{{ DB_PASS }}",
   "database": "{{ DB_NAME }}",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}
