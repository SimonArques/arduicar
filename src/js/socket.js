var socket = io('http://localhost');
socket.on('keydown', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
});
