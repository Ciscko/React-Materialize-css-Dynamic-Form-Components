import React from 'react';
import CheckboxInput from './CheckboxInput';
import RadioInput from './RadioInput';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import DatePick from './DatePicker'
import TextArea from './TextArea'
const FormControl = ({type, ...rest }) => {
    switch (type) {
        case 'text':
            return (
                <TextInput type={ type } {...rest } />
            )
        case 'number':
            return(
                <TextInput type = { type } {...rest } />
            )
        case 'select':
            return(
                <SelectInput {...rest } />
            )
        case 'checkbox':
            return (
                <CheckboxInput {...rest } />
            )
        case 'radio':
            return (
                <RadioInput {...rest } />
            )
        case 'datepicker':
            return (
                <DatePick {...rest } />
                )
        case 'textarea':
            return (
                <TextArea { ...rest } />
            )
        default:
            return (
                <div></div>
            )
    }
}
export default FormControl;