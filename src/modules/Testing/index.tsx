import React, {FC} from 'react';

// image
import image from 'Assets/images/react.png';
import narrow from 'Assets/svg/4-narrow.svg';

const Testing:FC = () => {
    return (
        <div>
            <div>Evironment: {process.env.NODE_ENV}</div>
            <img src={image} />
            <img src={narrow} />
        </div>
    );
};

export default Testing;
