let persons = require('../controllers/persons');

module.exports = app => {

    app.get('/', persons.index);

    app.get('/new/:name', persons.new);

    app.get('/remove/:name', persons.remove);

    app.get('/:name', persons.info);
}