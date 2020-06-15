import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import BigCalendar from '../calendar/CalendarContainer';
import DrawerContainer from '../drawer/DrawerContainer';

const LayoutContainer = ({ children }) =>
    <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" style={{ backgroundColor: 'whitesmoke' }}>
            <DrawerContainer>
                {children}
            </DrawerContainer>
        </Container>
    </React.Fragment>

export default LayoutContainer;