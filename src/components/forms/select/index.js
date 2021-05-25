import { Component } from "react";

import './style.css';

class Select extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: props.options,
            selected: props.selected || "",
            unselectedLabel: props.unselectedLabel || "",
            allowEmpty: props.allowEmpty || false,
            onChange: props.onChange
        }
    };

    onChangeHandler = (event) => {
        const { onChange } = this.state;
        const newSelection = event.target.value;
        this.setState({
            selected: newSelection
        });
        if (!!onChange) {
            onChange(newSelection);
        } else {
            console.log("Missing on change at selector component.");
        }
    };

    render() {
        const { options, selected, unselectedLabel, allowEmpty } = this.state;
        return (
            <select className="Select" onChange={this.onChangeHandler} defaultValue={selected}>
                {allowEmpty ? <option value="">{unselectedLabel}</option> : selected === "" ? <option disabled value="">{unselectedLabel}</option> : ""}
                {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
            </select>
        );
    }

}

export default Select;
