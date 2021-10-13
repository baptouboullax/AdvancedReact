import { useReducer } from "react";

const countReducer = (oldState, newState) => newState;

const Counter = ({ initialCount = 0, step = 1 }) => {
    const [count, setCount] = useReducer(countReducer, initialCount);
    const increment = () => setCount(count + step);
    return <button className="btn btn-secondary btn-lg" onClick={increment}>{count}</button>
};

export const UseReducer = () => <>
    <h1>UseReducer</h1>
    <Counter />
</>;
