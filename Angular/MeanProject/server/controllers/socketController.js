

module.exports = (io) => {

    io.on('connection', (socket) => {

        console.log("someone connected " + socket.id);

        socket.on('sendUpdate', game => {
            console.log('got the updated game I think');
            console.log(game);

            io.emit('getUpdate', game);
        });





        


    
        
    
    
    
    
    
    
        
    });

}
