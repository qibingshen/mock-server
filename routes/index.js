const server = global.server;

server.get('/', function(req, res, next) {
    res.json({
        code: 0,
        message: 'home'
    })
});

module.exports = server;