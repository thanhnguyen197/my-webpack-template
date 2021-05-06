import React, {useState} from 'react';
import './style.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    
    return (
        <>
            <button className="button" onClick={() => setCount(c => c+1)}>count {count}</button>
            <div>abcdefgh</div>
        </>
    ); 
};

export default Counter;