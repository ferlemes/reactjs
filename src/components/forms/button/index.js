import { Component } from "react";

import './style.css';

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value || "",
            disabled: props.disabled || false,
            onClick: props.onClick
        }
    };

    onClickHandler = () => {
        const { onClick } = this.state;
        if (!!onClick) {
            onClick();
        } else {
            console.log("Missing onClick at Button component.");
        }
    };

    render() {
        const { value, disabled } = this.state;
        return (
            <input className="Button"
                   type="button"
                   value={value}
                   onClick={this.onClickHandler}
                   disabled={disabled}
            />
        );
    }

}

export default Button;
