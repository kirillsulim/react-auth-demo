const { SignJWT } = require('jose');
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults()

const port = 3001;
const db = router.db;

/**
 * !!!IMPORTANT!!!
 * This secret is taken from jose usage example and not intended for use in real environment
 */
const secret = new TextEncoder().encode("cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2"); 
const alg = "HS256";

server.use(middlewares);
server.use(jsonServer.bodyParser)

async function issueToken(user) {
    return await new SignJWT({
        "username": user.username
    })
        .setProtectedHeader({alg})
        .setIssuedAt()
        .setExpirationTime('2h')
        .sign(secret);
}

server.post("/registration", async (req, res) => {
    db.read();
    let users = db.get("users").value();

    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) {
        res.status(400);
        res.json({error: "Incorrect data."})
    } else if (users.find(u => u.username == username)) {
        res.status(400);
        res.json({error: `User '${username}' already exists.`})
    } else {
        users.push({
            username: username,
            password: password
        });
        db.write();
        res.json({
            username: username,
            token: await issueToken({
                username: username
            })
        });
    }
});


server.use(router)

server.listen(port, () => {
  console.log('JSON Server is running')
})
