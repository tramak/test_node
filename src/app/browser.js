import React from 'react';
import { render } from 'react-dom';
import ApolloWrapper from './apolloWrapper';

render(<ApolloWrapper {...window.__APP_INITIAL_STATE__} />, document.getElementById('root'));