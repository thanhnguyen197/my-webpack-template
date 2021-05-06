import React from 'react';
import Counter from 'Components/Counter';
import {getSum} from 'Utils/index';
import Banner from 'Components/Banner';

const App = () => {
    const res = getSum(5, 6);
    return (
        <>
            <div>AAAA {process.env.NODE_ENV}</div>
            <img src='https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png' alt='react' width={400} />  
            <img src='https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png' alt='react' width={400} />  
            <img src='Assets/images/4-narrow.svg' alt='react' width={400} />
            <Counter />  
            <div>res: {res}</div>
            <Banner />
        </>
    );
};

export default App;