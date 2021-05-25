import { Component } from "react";

import './style.css';

class Text extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value || "",
            placeholder: props.placeholder,
            readonly: props.readonly,
            disabled: props.disabled,
            onChange: props.onChange
        }
    };

    onChangeHandler = (event) => {
        const { onChange } = this.state;
        const newValue = event.target.value;
        this.setState({
            value: newValue
        });
        if (!!onChange) {
            onChange(newValue);
        } else {
            console.log("Missing on change at text component.");
        }
    };

    render() {
        const { value, readonly, disabled, placeholder } = this.state;
        return (
            <input className="Text"
                   type="text"
                   value={value}
                   onChange={this.onChangeHandler}
                   readOnly={readonly}
                   disabled={disabled}
                   placeholder={placeholder}
            />
        );
    }

}

export default Text;
