import { useState } from "react";
import { FormGroup, FormControl } from "react-bootstrap";

export default function Input({
    name,
    type,
    defaultValue = "",
    className,
    ...props
}) {
    const [value, setValue] = useState(defaultValue);

    return (
        <FormGroup
            className={`${value != "" && "field--not-empty"} ${className}`}
            {...props}
        >
            <label htmlFor={name}>{name}</label>
            <FormControl
                defaultValue={value}
                value={value}
                type={type}
                id={name}
                onChange={(e) => setValue(e.target.value)}
                required
            />
        </FormGroup>
    );
}
