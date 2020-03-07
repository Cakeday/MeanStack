

module.exports = (io) => {

    io.on('connection', function (socket) {

        console.log("THIS IS COMING FROM THE CONTROLLER")
    
        socket.on('newGameWithHost', game => {
            console.log(game);
            io.emit("gamekey", game);
        });


        


    
        
    
    
    
    
    
    
        
    });

}
