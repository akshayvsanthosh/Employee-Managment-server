// import json-server
const jsonServer = require('json-server')
// create server for media player app
const EMAServer = jsonServer.create()
// create middleware used by JSON server
const middleware = jsonServer.defaults()
//  set up route for json file in server
const route = jsonServer.router('db.json')
// set up port for running server app
const PORT = 3000 || process.env.PORT

EMAServer.use(middleware)
EMAServer.use(route)
EMAServer.listen(PORT,()=>{
    console.log(`Employee Managment Server Started at port ${PORT} and waiting for client request`);
})