import { Component } from "react";
import './button.css'
class Button extends Component {

    render() {
        const PROPS = { ...this.props }
        return (
            <button 
            id={PROPS.id}
            className={`${PROPS.className} button`}
            onClick={PROPS.onClick}
            type={PROPS.type}>{PROPS.children}</button>
        )
    }
}
export default Button