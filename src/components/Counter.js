import { useState } from "react";

export function Counter() {

    // useState() - react hook that can put item to the state
    // return value: [0] - value, [1] - setter method
    let [count, setCount] = useState(0);

    const plus = () => {
        //++count;            // does not update a page
        setCount(count + 1);  // update page content
        console.log(count);
    }
    const minus = () => {
        //--count;
        setCount(count - 1);
        console.log(count);
    }

    return (
        <>
            <h3>Counter!!!</h3>
            <p>Value: {count}</p>
            <button onClick={plus}>Increment</button>
            <button onClick={minus}>Decrement</button>
        </>
    )
}