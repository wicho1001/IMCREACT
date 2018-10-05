import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BMI from './BMI';
import registerServiceWorker from './registerServiceWorker';

import '/home/jose/Desktop/BEDU/imcreact/imc-app/src/typography/typography.js'
import { BrowserRouter as Router, Route} from "react-router-dom";
import BMI2 from './BMI2';


ReactDOM.render(<Router>
    <Fragment>
        <Route path="/" component={App} exact />
        <Route path="/BMI" component={BMI} exact />
        <Route path="/BMI2" component={BMI2} exact />
    </Fragment>
</Router>, document.getElementById('root'));

registerServiceWorker();
