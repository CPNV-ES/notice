import {
    FormGroup,
    FormControl,
} from "react-bootstrap";

export default function Input({name, type}) {
    return (
        <FormGroup className="first">
            <label htmlFor={{ name }}>{ name }</label>
            <FormControl type={{ type }} id={{ name }} required />
        </FormGroup>
    )
}