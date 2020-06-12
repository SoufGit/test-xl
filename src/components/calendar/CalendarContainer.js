
import React, { useState, useEffect } from 'react';

import CalendarItem from './CalendarItem';
import CustomToolbar from './CalendarCustomToolbar';
import { DialogWithSelect } from '../dialog';

const data = require('../../data/data.json');

const useStateWithLocalStorage = localStorageKey => {
    const [eventList, setEventList] = useState(JSON.parse(localStorage.getItem(localStorageKey)) || []);
   
    // Similaire à componentDidMount et componentDidUpdate :
    useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(eventList));
    }, [eventList]);
   
    return [eventList, setEventList];
};

const CalendarContainer = () => {
    const [eventList, setEventList] = useStateWithLocalStorage('eventList');
    const [isOpen, setIsOpen] = useState(false);
    const { employeeList } = data;
    const [dataEmployeeList, setDataEmployeeList] = React.useState({ employeeList });
    const [inputTextValue, setInputTextValue] = React.useState('');
    const [inputSelectValue, setInputSelectValue] = React.useState('');

    const handleSelect = ({ start, end }) => {
        setEventList([
            ...eventList,
            {
                start,
                end,
                isSelected: true
            }
        ])
        setIsOpen(true);
        setInputTextValue('');
        setDataEmployeeList({ ...dataEmployeeList, currentEmployee: null });
    }

    const getSelectedEvent = event => event.isSelected;
    const getCurrentEmployee = id => dataEmployeeList.employeeList.find(employee => employee.id === id);
    const eventStyleGetter = event => {
        const employee = getCurrentEmployee(event.employeeId);
        const backgroundColor = employee ? employee.color : 'silver';//#3174ad
        return { style: { backgroundColor } };

        /*
        return {
            className: "",
            style: newStyle
        };*/
    }

    const handleInputSelectChange = e => {
        setInputSelectValue(+e.target.value);
        setDataEmployeeList({ ...dataEmployeeList, currentEmployee: getCurrentEmployee(+e.target.value) });
    };

    const handleDialogClose = (isCancel = false) => {
        setIsOpen(false);
        const index = eventList.findIndex(getSelectedEvent);
        if (inputTextValue && !isCancel) {
            eventList[index] = {
                ...eventList[index],
                title: inputTextValue,
                isSelected: false,
                employeeId: dataEmployeeList.currentEmployee && dataEmployeeList.currentEmployee.id
            };
        }
        else {
            eventList.splice(index, 1);
        }
        setEventList([
            ...eventList,
        ]);
    }

    const handleInputChange = event => setInputTextValue(event.target.value);

    return (
        <div className="calendar__container">
            {isOpen &&
                <DialogWithSelect
                    isOpen={isOpen}
                    values={dataEmployeeList}
                    handleInputSelectChange={handleInputSelectChange}
                    handleDialogClose={handleDialogClose}
                    handleInputChange={handleInputChange}
                    inputValue={inputTextValue}
                    inputSelectValue={inputSelectValue}
                />
            }
            <CalendarItem
                handleSelect={handleSelect}
                CustomToolbar={CustomToolbar}
                eventList={eventList}
                eventPropGetter={eventStyleGetter} />
        </div>
    )
};

export default CalendarContainer;