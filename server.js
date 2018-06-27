const path = require('path');
const jsonServer = require('json-server');
const config = require('config');
const restfulRoutes = require('./restful_routes');
const DB = require('./mock/db');

// const ip = require('ip').address();
const ip = config.get('server');
const port = config.get('port');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router(DB());

global.server = server;

// 引入不符合restful接口的
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use((req, res, next) => {
    res.header('X-Hello', 'World');
    next();
});

router.render = (req, res) => {
// 应该丰富下错误信息
    if (res.statusCode === 404) {
        res.json({
            code: 2,
            message: '格式错误',
        });
    } else {
        res.json({
            code: 0,
            message: 'success',
            data: res.locals.data //res.locals.data这个是真正的数据
        });
    }
};

server.use(jsonServer.rewriter(restfulRoutes));
server.use(router);

server.listen({
    ip,
    port,
}, () => {
    console.log(`JSON Server is running in http://${ip}:${port}`);
});
