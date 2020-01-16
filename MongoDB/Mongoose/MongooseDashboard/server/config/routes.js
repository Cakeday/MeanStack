// Requires your controllers
let dogs = require('../controllers/dogs')

module.exports = app => {

    app.get('/', dogs.index);

    app.get('/dogs/new', dogs.newDog);

    app.post('/create', dogs.createNewDog);

    app.get('/dogs/:id', dogs.getSingleDog);

    app.get('/dogs/edit/:id', dogs.editSingleDog);

    app.post('/dogs/:id', dogs.updateSingleDog);

    app.get('/dogs/destroy/:id', dogs.deleteSingleDog);

    

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

}
