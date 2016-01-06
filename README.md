# Cache plugin intgration for SailsJS

This package simply integrates and bundles Cacheman to be used easily within SailsJS framework.

## Install the package
~~~
    # npm install sailsjs-cacheman --save
~~~

The cache object can be called within your app by :

~~~
    var Cache = require('sailsjs-cacheman').sailsCacheman('name');
    // You can do a console.log to inspect the object.
    console.log(Cache);
~~~

The sails wrapper will look for a configuration file on config/cacheman.js 
~~~
module.exports.cacheman = {
  driver: 'memory',
  
  memory: {
    engine: 'cacheman-memory'
  },
  
  redis: {
    port: 9999,
    host: '127.0.0.1',
    password: 'my-p@ssw0rd',
    database: 1,
    engine: 'cacheman-redis'
  },
  
  mongo: {
    port: 9999,
    host: '127.0.0.1',
    username: 'beto',
    password: 'my-p@ssw0rd',
    database: 'my-cache-db',
    collection: 'my-collection',
    compression: false,
    engine: 'cacheman-mongo'
  },
  
  file: {
    engine: 'file'
  }
  
}
~~~
## Useage and API 
You can switch the driver accordingly. As of the relase v0.1.2 we have support to all available drivers from cacheman. 

[API is available here.](https://github.com/cayasso/cacheman)

Credits : [NodeJS Cacheman Package](https://github.com/cayasso/cacheman)
