const mongoose = require('mongoose'),
      Quote = mongoose.model('Quote')
module.exports = function(app){

    // app.get('/', function (req, res) {
    //    Quote.find({}, function (err, data){
            
    //    })
    // })

    app.get('/', (req, res) => {
        // User.find()
        // .then(data => res.render("index", {users: data}))
        // .catch(err => res.json(err));
    
        res.render('index');
    });
    
    app.post('/quotes', (req, res) => {
        console.log(req.body);
        let newQuote = req.body;
        Quote.create(newQuote)
            .then(newQuote => {
                console.log('quote created: ', newQuote);
                res.redirect('/quotes');
            })
            .catch(err => {
                console.log(err);
                for (var key in err.errors) {
                    req.flash('submit', err.errors[key].message);
                }
                res.redirect('/');
            });
    });
    
    app.get('/quotes', (req, res) => {
        Quote.find().sort({createdAt: -1})
            .then(quotes => {
                console.log(quotes);
                res.render('quotes', {quotes: quotes});
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    })
    
    
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
}        