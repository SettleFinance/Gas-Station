import React from 'react';
import ReactDOM from 'react-dom';

// Components
import registerServiceWorker from './registerServiceWorker';
import App from './App';

// Style
import './index.css';

ReactDOM.render(
<div>
    <div>
      <App />
    </div>
</div>, document.getElementById('root'));

registerServiceWorker();
