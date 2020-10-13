# Express Boilerplate
Boilerplate for creating REST API backend with ExpressJs

## Features
* CORS enabled
* Add header protection with [helmet](https://npmjs.org/package/helmet)
* Data compression using [compression](https://npmjs.org/package/compression)

## How to setup
* Fork it
* Install dependencies
``` bash
npm install
```
* Copy `.env.example` file to `.env`  and change it with your credentials

## Folder References

### bin
For storing some tools to run in your cli

### src/builders
For storing data object builder or database models

### src/controllers
For storing your logic code or you can use it as route handler

### src/helpers
For storing some helpful method that can be use in anywhere

### src/middlewares
For storing your middleware

### src/repositories
For storing your data flow method like request to other api or call to database

### src/routes
For storing your route handler
