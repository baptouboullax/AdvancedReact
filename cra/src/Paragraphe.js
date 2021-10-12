import { Button } from "./buttons";

export const Paragraphe = props => <p>
    Edit <code>src/App.js</code> and save to reload.<br />
    <Button onClickHandler={props.onClickHandler}>
        {props.text}
    </Button>
</p>;
