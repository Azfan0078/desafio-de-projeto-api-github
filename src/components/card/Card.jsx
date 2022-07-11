import { Component } from "react";
import './card.css'
class Card extends Component{
    render(){
        const PROPS = this.props.reposInfos
        return(
            <div className="card">
                <h2>{PROPS.REPOS_NAME}</h2>
                <p>Full name</p>
                <p><a href={PROPS.HTML_URL}>{PROPS.HTML_URL}</a></p>
            </div>
        )
    }
}
export default Card