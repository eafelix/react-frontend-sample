import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// TODO: ADD ROBOTO VIA JS: check html link import, remove this when will be solved
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
