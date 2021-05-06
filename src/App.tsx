import React from 'react';
import Counter from 'Components/Counter';
import Banner from 'Components/Banner';
import image from 'Assets/images/react.png';
import narrow from 'Assets/svg/4-narrow.svg';

const App = () => {
    let a = 5;

    return (
        <>
            <div>AAAA {process.env.NODE_ENV}</div>
            <img src='https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png' alt='react' width={400} />  
            <img src='https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png' alt='react' width={400} />  
            <img src={image} alt='react' width={400} />
            <img src={narrow} alt='narrow' width={400} />
            <Counter />  
            <Banner />
        </>
    );
};

export default App;