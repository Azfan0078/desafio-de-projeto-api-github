import { Component } from "react";
import Card from "../../components/card/Card";
import './repositories.css'

class Repositories extends Component {
    renderRepos(arrayOfRepos) {
        if (arrayOfRepos.length) {
            const REPOS = arrayOfRepos.map(repos => {
                const REPOS_NAME = repos.name
                const HTML_URL = repos.html_url
                const REPOS_ID = repos.id
                
                return (
                    <Card key={REPOS_ID} reposInfos={{REPOS_NAME,HTML_URL}}/>
                )
            })
            return REPOS
        }

    }
    render() {
        const PROPS = this.props.reposInfo

        return (
            <div className="repositories">
                {this.renderRepos(PROPS)}
            </div>
        )
    }
}
export default Repositories