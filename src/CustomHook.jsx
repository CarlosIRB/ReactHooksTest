import {useState} from "react";

const useCounter = (initialState) => {
    const [counter, setCounter] = useState(initialState)

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => { 
        setCounter(counter - 1)
    }
    const reset = () => {
        setCounter(initialState)
    }
    return {
        counter, increment, decrement, reset
    }
}

const CustomHook = () => {

    const FirstCounter = useCounter(10);
    const SecondCounter = useCounter(20);

    return(
        <>
            <h1>{FirstCounter.counter}</h1>
            <button onClick={FirstCounter.increment}>+</button>
            <button onClick={FirstCounter.decrement}>-</button>
            <button onClick={FirstCounter.reset}>Reset</button>
            <br />
            <h1>{SecondCounter.counter}</h1>
            <button onClick={SecondCounter.increment}>+</button>
            <button onClick={SecondCounter.decrement}>-</button>
            <button onClick={SecondCounter.reset}>Reset</button>
        </>
    )
}

export default CustomHook;