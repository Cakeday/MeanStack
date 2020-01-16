// Requires your controllers
let quotes = require('../controllers/quotes')



module.exports = function(app){

    app.get('/', quotes.index);
    
    app.post('/quotes', quotes.create);
    
    app.get('/quotes', quotes.find);
    
    
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

