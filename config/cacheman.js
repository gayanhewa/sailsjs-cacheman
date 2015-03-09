

module.export.cacheman = {
  driver: 'memory',
  
  memory: {
    engine: 'cacheman-memory'
  },
  
  redis: {
    port: 9999,
    host: '127.0.0.1',
    password: 'my-p@ssw0rd'
    database: 1,
    engine: 'cacheman-redis'
  },
  
  mongo: {
    port: 9999,
    host: '127.0.0.1',
    username: 'beto',
    password: 'my-p@ssw0rd'
    database: 'my-cache-db',
    collection: 'my-collection',
    compression: false,
    engine: 'cacheman-mongo'
  },
  
  file: {
    engine: 'file'
  }
  
}
