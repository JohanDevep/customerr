import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form } from 'react-bootstrap';

const MyDatePicker = ( { prefilledDate, onSelect  } ) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (onSelect) {
      onSelect(date);
    }
  };
  
  useEffect(() => {
    if (prefilledDate) {
      const parsedDate = new Date(prefilledDate);
      setSelectedDate(parsedDate);
    }
  }, [prefilledDate]);

  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() - 1);

  return (
    <Form.Group>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText="DD/MM/YYYY"
        dateFormat="dd/MM/yyyy"
        isClearable
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        maxDate={futureDate}
        // yearDropdownItemNumber={10} 
      />
    </Form.Group>
  );
};

export default MyDatePicker;