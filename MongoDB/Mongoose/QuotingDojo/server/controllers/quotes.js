const mongoose = require('mongoose');
let Quote = mongoose.model('Quote');

module.exports = {

    index : (req, res) => {
        res.render('index')
    },

    create : (req, res) => {
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
    },

    find : (req, res) => {
        Quote.find().sort({createdAt: -1})
            .then(quotes => {
                console.log(quotes);
                res.render('quotes', {quotes: quotes});
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    }
}
