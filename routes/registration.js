import Registration from '../src/views/Registration/Registration.jsx';
import template from '../src/public';
import { renderToString } from 'react-dom/server';

let express = require('express');
let router = express.Router();

router.get('/registration', function(req, res, next) {
  const appString = renderToString(<Registration />);

  res.send(template({
    body: appString,
    title: 'Gosapis социальная сеть для пчеловодов',
    initialState: JSON.stringify(initialState)
  }));
});

module.exports = router;
