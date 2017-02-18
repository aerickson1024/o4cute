const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');

// App Setup
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json({ type: '*/*' }));
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));
router(app);

// Server Setup
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log(`Server is now listening on port ${app.get('port')}`);
});
