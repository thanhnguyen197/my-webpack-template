// Libraries
import React from 'react';
import {Field, ErrorMessage} from 'formik';

// components
import TextError from 'Components/FormikControl/components/TextError';

interface IDatalist {
    label?: string;
    name: string;
    list: string;
    options: Array<any>;
}

const Datalist:React.FC<IDatalist> = (props) => {
    const {label, list, name, options, ...rest} = props;

    return (
        <div className='form-control'>
            {label ? <label className='field-label' htmlFor={name}>{label}</label> : null}
            <Field name={name}>
                {({field}:any) => {

                    return (
                        <>
                            <input 
                                list={list}
                                id={name} 
                                {...field}
                                {...rest}
                            />
                            <datalist id={list}>
                                {options.length ? options.map((option:any) => {
                                    return (
                                        <option key={option.value} value={option.value} label={option.label}  />
                                    );
                                }) : null}
                            </datalist>
                        </>
                    );
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

Datalist.defaultProps = {
    label: '',
    name: 'datalist',
    list: 'list',
    options: []
};

export default Datalist;
