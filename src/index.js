import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { robots } from './robots'; //Have to 'destructure' because it is not 'default' ie. it exports more than one

ReactDOM.render(
			<App robots={robots}/>, document.getElementById('root'));
registerServiceWorker();
