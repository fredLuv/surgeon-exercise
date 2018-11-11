## Quick Start to run API

1. Clone the repo
1. Install dependencies: `npm install`
1. Start your Postgres server and create a database called "surgeon"
1. Create the database tables: `node csv2pg.sql`
1. Start the server: `$ npm start`

## Tests

This comes with a load test using [Apache Bench](http://httpd.apache.org/docs/2.2/programs/ab.html) that by default exercises the API endpoint for the `/userlist` service:

```sh
sh tests/load-test.sh
```

## Todo: Frontend
Other interesting activities happens this weekend :) 