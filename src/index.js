import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import toto from './assets/images/xlBurger1.jpeg';
//import './index.less';

var pjson = require('../package.json');
console.log('VERSION', pjson.version);
console.log('totototo', toto);
//document.write('totot')
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
