const io = require('socket.io')(8000)

const user = {};

io.on('connection', socket=>{
    socket.on('new-user-joined', name=>{
        console.log("New user", name);
        user[socket.id]=name;
        socket.brodcast.emit('user-joined',name)
    })
    socket.on('send',message=>{
        socket.brodcast.emit('receive',{message:message,name:user[socket.id]})
    })
})