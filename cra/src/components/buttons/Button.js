export const Button = props => {
    const styleType = (props.outline === true)
        ? 'btn-outline-primary'
        : 'btn-primary';
    return <button className={`btn ${styleType}`} onClick={props.onClickHandler}>
        {props.children}
    </button>;
};

Button.defaultProps = {
    outline: true
}
