import React from 'react';
import Switch from '@material-ui/core/Switch';
import useDarkMode from 'use-dark-mode';

const DarkModeSwitch = () => {
    const darkMode = useDarkMode(false);
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true
    });

    const handleChange = event => {
        console.log('eventevent', event);
        setState({
            ...state,
            [event.target.name]: event.target.checked
        });
    };


    return (
        <div>
            <button type="button" onClick={darkMode.disable}>
                ☀
            </button>
            <Switch
                checked={darkMode.value}
                onChange={darkMode.toggle}
                name="checkedA"
                inputProps={{'aria-label': 'secondary checkbox'}}
            />
            <button type="button" onClick={darkMode.enable}>
                ☾
            </button>
        </div>
    );
};

export default DarkModeSwitch;
