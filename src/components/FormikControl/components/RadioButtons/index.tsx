import React from 'react';
import {Field, ErrorMessage} from 'formik';

// components
import TextError from 'Components/FormikControl/components/TextError';

interface IRadioButtons {
    label?: string;
    name: string;
    options: Array<any>;
}

const RadioButtons:React.FC<IRadioButtons> = (props) => {
    const {label, name, options, ...rest} = props;

    return (
        <div className="form-control">
            {label ? <label className='field-label'>{label}</label> : null}
            <Field name={name}>
                {({field}:any) => {
                    return (
                        <div className="radio-group">
                            {options && options.length ? options.map((option:any) => {
                                return (
                                    <div className="radio-item" key={option.key}>
                                        <input
                                            type="radio"
                                            id={option.value}
                                            {...field}
                                            {...rest}
                                            value={option.value} 
                                            checked={field.value === option.value}
                                        />
                                        <label htmlFor={option.value} >{option.key}</label>
                                    </div>
                                );
                            }) : null}
                        </div>
                    );
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

RadioButtons.defaultProps = {
    label: '',
    name: 'radioButtons',
    options: []
};

export default RadioButtons;
