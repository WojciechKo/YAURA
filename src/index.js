import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './styles.css';

import registerServiceWorker from './registerServiceWorker';

import { mainStore } from './stores/MainStore';

ReactDOM.render(<App store={ mainStore } />, document.getElementById('root'));

registerServiceWorker();
