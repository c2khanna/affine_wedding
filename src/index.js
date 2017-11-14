import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons/css/tachyons.min.css';
import './App.css';
import Routes from './routes'
import 'font-awesome/css/font-awesome.min.css'

ReactDOM.render(<Routes/>, document.getElementById('root'));
registerServiceWorker();
