const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(`${__dirname}/public`));

app.listen(app.get('port'), () => {
  console.log(`Server is now listening on port ${app.get('port')}`);
});
