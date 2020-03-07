

module.exports = (io) => {

    io.on('connection', function (socket) {


        socket.on('sendUpdate', game => {
            console.log('got the updated game I think');
            console.log(game);

            // TODO
            io.emit();
        });




        


    
        
    
    
    
    
    
    
        
    });

}
