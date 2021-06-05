// Libraries
import React from 'react';
import {Field, ErrorMessage} from 'formik';

// components
import TextError from 'Components/FormikControl/components/TextError';

const Input:React.FC<any> = (props) => {
    const {label, name, ...rest} = props;

    return (
        <div className='form-control'>
            {label ? <label className='field-label' htmlFor={name}>{label}</label> : null}
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

Input.defaultProps = {
    label: '',
    name: 'input'
};

export default Input;
