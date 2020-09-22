import React, { useState, useEffect } from 'react';

export default function MainPage() {

    const [num, setNum] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setNum(num => num + 1);
            console.log("ran")
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    function handleVisibilityChange() {
        if (document.hidden) {
            clearInterval(num)
        }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange, false);

    return (
        <div>
            <h1>The Counter</h1>
            <h2>{num}</h2>
        </div>
    )
}

