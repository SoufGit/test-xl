import React, { Component } from 'react';
import logo from './assets/images/xlBurger1.jpeg';
import LayoutContainer from './components/layout/LayoutContainer';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'react-big-calendar/lib/sass/styles.scss';
//import './app.less';

class App extends Component {
    render() {
        return (
            <LayoutContainer>
                <div className="App">
                    <div className="App-header">
                         <img src={logo} className="App-logo" alt="logo" /> 
                        <h2>Welcome to React</h2>
                    </div>
                    <p className="App-intro">
                        Ptite démo pour les potos
        </p>
                </div>
            </LayoutContainer >
        );
    }
}

export default App;
