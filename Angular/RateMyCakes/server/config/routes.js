// Requires your controllers
let controller = require('../controllers/MainController')



module.exports = function(app){

    app.get('/cakes', controller.getAllCakes);

    app.get('/cakes/:id', controller.getOneCake);
    
    app.post('/cakes', controller.createCake);

    app.put('/cakes/:id', controller.updateCake);

    app.delete('/cakes/:id', controller.deleteCake);
    
    
    
    
    // EXAMPLE USAGE OF FLASH
    // app.post('/users', (req, res) => {
    //     const user = new User(req.body);
    //     user.save()
    //         .then(() => res.redirect('/'))
    //         .catch(err => {
    //             console.log("We have an error!", err);
    //             // adjust the code below as needed to create a flash message with the tag and content you would like
    //             for (var key in err.errors) {
    //                 req.flash('registration', err.errors[key].message);
    //             }
    //             res.redirect('/');
    //         });
    // });
       // all other routes
};

