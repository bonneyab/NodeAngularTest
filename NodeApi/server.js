var express = require('express'),
	cors = require('cors'),
    birthday = require('./routes/birthdays');
 
var app = express();
app.use(cors());
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 
app.get('/birthdays', birthday.findAll);
app.get('/birthdays/:id', birthday.findById);
 
app.listen(3000);
console.log('Listening on port 3000...');