import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component did mount or update');
        return () => {
            console.log('Cleanup before unmount');
        };
    }, [count]);

    const increment = () => {
        setCount(count + 1)
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;