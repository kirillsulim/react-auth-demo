const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const port = 3001;
const db = router.db;

server.use(middlewares)
server.use(router)

server.listen(port, () => {
  console.log('JSON Server is running')
})
