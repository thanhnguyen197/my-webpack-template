import React from 'react';
import DataView from 'react-datepicker';
import {Field, ErrorMessage} from 'formik';

import 'react-datepicker/dist/react-datepicker.css';

// components
import TextError from 'Components/FormikControl/components/TextError';

interface IDatePicker {
    label?: string;
    name: string;
}

const DatePicker:React.FC<IDatePicker> = (props) => {
    const {label, name, ...rest} = props; 

    return (
        <div className="form-control">
            {label ? <label className='field-label' htmlFor={name}>{label}</label> : null}
            <Field name={name}>
                {({form, field}:any) => {
                    const {setFieldValue} = form;
                    const {value} = field;

                    return (
                        <DataView 
                            id={name} 
                            {...field} 
                            {...rest} 
                            selected={value}  
                            onChange={(val:any) => setFieldValue(name, val)}
                        />
                    );
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

DatePicker.defaultProps = {
    label: '',
    name: 'datepicker'
};

export default DatePicker;
