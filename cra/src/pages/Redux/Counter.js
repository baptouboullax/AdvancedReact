export const Counter = (props) => {
    const { counter, increment, decrement, reset } = props;

    return <>
        <h1>Redux counter {counter}</h1>
        <div className="row">
            <div className="col">
                <button className="btn btn-primary" onClick={increment}>INCREMENT BY 1</button>
            </div>
            
            <div className="col">
                <button className="btn btn-secondary" onClick={decrement}>DECREMENT BY 1</button>
            </div>

            <div className="col">
                <button className="btn btn-danger" onClick={reset}>RESET</button>
            </div>
        </div>
    </>;
};
