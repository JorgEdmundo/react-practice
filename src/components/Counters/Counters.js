import React, { useState } from "react";

import "../../styles/counters.css";

function Counters() {
    const [counters, setCounters] = useState([]);

    const addCounter = () => {
        setCounters([...counters, { counter: 0 }]);
    };

    const incrementCounter = (index) => {
        const copyCounters = [...counters];
        copyCounters[index].counter = copyCounters[index].counter + 1;
        setCounters(copyCounters);
    };

    const resetCounter = (index) => {
        const copyCounters = [...counters];
        copyCounters[index].counter = 0;
        setCounters(copyCounters);
    };

    const resetAll = () => {
        const copyCounters = [...counters];
        const resetCounters = copyCounters.map((item) => {
            item.counter = 0;
            return item;
        });

        setCounters(resetCounters);
    };

    const deleteAll = () => {
        setCounters([]);
    };

    const deleteCounter = (index) => {
        const copyCounters = [...counters];
        copyCounters.splice(index, 1);
        setCounters(copyCounters);
    };

    return (
        <div>
            <h1>Counters</h1>
            <div className="buttonContainer">
                <button onClick={addCounter}>Add Counter</button>
                <button onClick={resetAll}>Reset All</button>
                <button onClick={deleteAll}>Delete All</button>
            </div>
            <div className="container">
                {counters.map((counter, index) => {
                    return (
                        <div key={index} className="counter">
                            <span>{counter.counter}</span>
                            <button onClick={() => incrementCounter(index)}>
                                Increment
                            </button>
                            <button onClick={() => resetCounter(index)}>
                                Reset
                            </button>
                            <button onClick={() => deleteCounter(index)}>
                                Delete
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Counters;
