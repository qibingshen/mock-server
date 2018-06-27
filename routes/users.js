const server = global.server;

server.get('/users', function(req, res, next) {
    res.json({
        code: 0,
        message: 'users'
    })
});

module.exports = server;