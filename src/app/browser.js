import React from 'react';
import { render } from 'react-dom';
import Dashboard from '../dashboard';

render(<Dashboard {...window.__APP_INITIAL_STATE__} />, document.getElementById('root'));