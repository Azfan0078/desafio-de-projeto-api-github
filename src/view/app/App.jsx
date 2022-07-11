import { Component } from "react";
import Profile from "../profile/Profile";
import Repositories from "../repositories/Repositories";
import Button from "../../components/button/Button";
import { ProfileAPI, ReposAPI, StarredAPI } from "../../services/githubAPI";

import './app.css'
const INITIAL_STATE = {
    profileInfos: {},
    reposInfos: [],
    username: '',
    reposOrStarred: 'repos',
    notFoundMessage: false
}
class App extends Component {
    state = { ...INITIAL_STATE }
    showErrorMessage() {
        if (this.state.notFoundMessage) {
            return (
                <div className="error-message">
                    <h2>Usuário não encontrado</h2>
                </div>
            )
        }
    }
    showProfileRepositoriesAndButtons() {
        const STARRED_API = new StarredAPI()
        const REPOS_API = new ReposAPI()
        if (this.state.username) {
            return (
                <>
                    <Profile profileInfos={this.state.profileInfos} />

                    <div className="repos-buttons">
                        <Button id='repos-button' onClick={async (e) => {
                            const USERNAME = this.state.username
                            const REPOS_DATA = await REPOS_API.search(USERNAME)

                            this.setState({
                                reposOrStarred: 'repos',
                                reposInfos: REPOS_DATA,
                                starredInfos: []
                            })
                        }}>Repositories</Button>

                        <Button onClick={async () => {
                            const USERNAME = this.state.username
                            const STARRED_DATA = await STARRED_API.search(USERNAME)
                            this.setState({
                                reposOrStarred: 'starred',
                                starredInfos: STARRED_DATA,
                                reposInfo: []
                            })
                        }}>Stared</Button>

                    </div>
                    <Repositories reposInfo={(() => {
                        if (this.state.reposOrStarred === 'repos') {
                            return this.state.reposInfos
                        } else {
                            return this.state.starredInfos
                        }
                    })()} />
                </>
            )
        }
    }
    render() {

        const PROFILE_API = new ProfileAPI()
        const REPOS_API = new ReposAPI()

        if (this.state.username) {
            return (
                <div className="app">
                    <form action="#" className="form">
                        <input type="text" id="name" placeholder="Nome do usuário" />
                        <Button type='submit' className='form-button' onClick={async (e) => {
                            const USERNAME = e.target.parentNode[0].value
                            const USER_DATA = await PROFILE_API.search(USERNAME)
                            const REPOS_DATA = await REPOS_API.search(USERNAME)

                            if (USER_DATA && !USER_DATA.message) {
                                this.setState({
                                    username: USERNAME,
                                    profileInfos: USER_DATA,
                                    reposInfos: REPOS_DATA,
                                    notFoundMessage: false
                                })
                            }

                            if (!USER_DATA || USER_DATA.message === 'Not Found') {
                                this.setState({
                                    notFoundMessage: true,
                                    username: '',
                                    profileInfos: [],
                                    reposInfos:[]
                                })
                            }

                        }}>Buscar</Button>
                    </form>
                    {this.showErrorMessage()}

                    {this.showProfileRepositoriesAndButtons()}

                </div>
            )
        } else {
            return (
                <div className="app">
                    <form action="#" className="form">
                        <input type="text" id="name" placeholder="Nome do usuário" />
                        <Button type='submit' className='form-button' onClick={async (e) => {
                            const USERNAME = e.target.parentNode[0].value
                            const USER_DATA = await PROFILE_API.search(USERNAME)
                            const REPOS_DATA = await REPOS_API.search(USERNAME)
                            
                            if (USER_DATA && !USER_DATA.message) {
                                this.setState({
                                    username: USERNAME,
                                    profileInfos: USER_DATA,
                                    reposInfos: REPOS_DATA,
                                    notFoundMessage: false
                                })
                            }

                            if (!USER_DATA || USER_DATA.message === 'Not Found') {
                                this.setState({
                                    notFoundMessage: true,
                                    username: '',
                                    profileInfos: [],
                                    reposInfos:[]
                                })
                            }
                        }}>Buscar</Button>
                    </form>
                    {this.showErrorMessage()}
                    {this.showProfileRepositoriesAndButtons()}
                </div>
            )
        }


    }
}
export default App