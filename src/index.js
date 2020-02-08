import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/font-awesome.min.css';
import '../node_modules/react-form-builder2/dist/app.css'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Gui from './Form';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/form" component={Gui} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
