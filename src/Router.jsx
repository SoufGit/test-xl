import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import LayoutContainer from 'Components/layout/LayoutContainer';
import BigCalendar from 'Components/calendar/CalendarContainer';
import App from './App';

const Router = () =>
    <BrowserRouter>
        <LayoutContainer>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={(props) => <App {...props} />}
                />
                <Route
                    path="/cra"
                    component={(props) => <BigCalendar {...props} />}
                />
                {/* <Route
                    path="/cra"
                    render={(props) => <BigCalendar {...props} toto/>}
                /> */}
            </Switch>
        </LayoutContainer>
    </BrowserRouter>;

export default Router;
