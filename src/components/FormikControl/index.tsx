import React from 'react';

// components
import Input from 'Components/FormikControl/components/Input';
import Textarea from 'Components/FormikControl/components/Textarea';
import Datalist from 'Components/FormikControl/components/Datalist';
import RadioButtons from 'Components/FormikControl/components/RadioButtons';
import CheckboxGroup from 'Components/FormikControl/components/CheckboxGroup';
import DatePicker from 'Components/FormikControl/components/DatePicker';

const FormikControl:React.FC<any> = (props) => {
    const {control, ...rest} = props;

    switch (control) {
        case 'input': return <Input {...rest} />;
        case 'textarea': return <Textarea {...rest} />;
        case 'datalist': return <Datalist {...rest} />;
        case 'radio': return <RadioButtons {...rest} />;
        case 'checkbox': return <CheckboxGroup {...rest} />;
        case 'date': return <DatePicker {...rest} />;
        default: return <></>;

    }
};

export default FormikControl;
