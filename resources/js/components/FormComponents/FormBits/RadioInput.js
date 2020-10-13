import React from 'react';
import { Field, ErrorMessage } from 'formik'
import ErrorComponent from './ErrorComponent';


const RadioInput = (props) => {
    return (
        <div className="">
            <label>{props.label}</label><br></br>
            <>
                {
                    props.options.map((option) => {
                        return (
                            <label key={option.key}>
                                <Field name={props.name} type="radio" value={option.key} />
                                <span>{option.value}</span><br></br>
                            </label>
                        )
                    })
                }
            </>
            <ErrorMessage name={props.name} component={ErrorComponent} />
        </div>
    );
}
export default RadioInput;