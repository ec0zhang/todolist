import React from 'react';
import ReactDOM from 'react-dom';

import Todolist from './Todolist'   ;
import * as serviceWorker from './serviceWorker';

// JSX
ReactDOM.render(<Todolist />,  document.getElementById('root'));

serviceWorker.unregister();
