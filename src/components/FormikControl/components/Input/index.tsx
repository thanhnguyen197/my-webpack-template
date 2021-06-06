// Libraries
import React from 'react';
import {Field, ErrorMessage} from 'formik';

// components
import TextError from 'Components/FormikControl/components/TextError';

export interface IInput {
    label?: string;
    name: string;
    type?: string;
    className?:string;
    required?:boolean;
    minLength?:string;
    maxLength?:string;
    size?:string;
    pattern?:string;
    readOnly?:boolean;
    placeholder?:string;
    disabled?:boolean;
    autoFocus?:boolean;
}

const Input:React.FC<IInput> = (props) => {
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
