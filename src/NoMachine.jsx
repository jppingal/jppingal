import React, { useState } from "react";

const NoMachine = () => {
    const [myNum, setMyNum] = useState(0);

    const incNum = () => {
        setMyNum(myNum + 1);
    };

    const dicNum = () => {
        setMyNum(myNum - 1);

        if (myNum === 0) {
            alert("Ohh No..!!")
        };
    };

    return (
        <>
            <div className="no-area">
                <div className="mach-area">
                    <br />
                    <h1 className="title"> No. Machine</h1>
                    <h1 className="number">{myNum}</h1>
                    <br /><br />
                    <button onClick={incNum}>+</button>
                    <button onClick={dicNum}>-</button>
                </div>
            </div>
        </>
    );
};

export default NoMachine;