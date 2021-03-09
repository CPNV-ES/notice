import { useState } from "react";
import "./Checkbox.css";

export default function Checkbox({ text, checked = false }) {
    const [value, setValue] = useState(checked);

    return (
        <label className="control control--checkbox mb-0">
            <span className="caption">{text}</span>
            <input
                type="checkbox"
                value={value}
                defaultChecked={value}
                onClick={(e) => setValue(!value)}
            />
            <div className="control__indicator"></div>
        </label>
    );
}
