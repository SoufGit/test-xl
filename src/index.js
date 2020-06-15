import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import toto from './assets/images/xlBurger1.jpeg';
//import './index.less';

var pjson = require('../package.json');
console.log('VERSION', pjson.version);
console.log('totototo', toto);
//document.write('totot')
ReactDOM.render(
    <Router />,
    document.getElementById('root')
);
