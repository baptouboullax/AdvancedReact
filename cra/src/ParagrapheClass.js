import { Component } from "react";
import { ButtonRegularOutline } from "./buttons";

export class ParagrapheClass extends Component {
    constructor() {
        super();
    }

    render() {
        return <p>prout prout caca <ButtonRegularOutline>Hey Hey</ButtonRegularOutline></p>
    }

    componentDidUpdate() {
        
    }
}
