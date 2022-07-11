import { Component } from "react";
import './profile.css'
class Profile extends Component {

    render() {
        const PROPS = { ...this.props.profileInfos }
        const FULL_NAME = PROPS.name
        const LOGIN = PROPS.login
        const IMG_URL = PROPS.avatar_url
        const COMPANY = PROPS.company
        const LOCATION = PROPS.location
        const BLOG = PROPS.blog
        const FOLLOWERS = PROPS.followers
        const FOLLOWING = PROPS.following
        const GISTS = PROPS.public_gists
        const REPOS = PROPS.public_repos
        const HTML_URL = PROPS.html_url

        if (Object.keys(PROPS).length) {
            return (
                <div className="profile">
                    <img src={`${IMG_URL}`} alt="imagemProfile" className="profile-img" />
                    <div className="information-div">
                        <h2>{FULL_NAME}</h2>
                        <p><strong>Username:</strong> <a href={HTML_URL}>{LOGIN}</a></p>
                        <p><strong>Company:</strong> {COMPANY}</p>
                        <p><strong>Location:</strong> {LOCATION}</p>
                        <p><strong>Blog:</strong> <a href={BLOG}>{BLOG}</a></p>
                        <div className="div-deepData">
                            <div>
                                <label htmlFor="followers"><strong>Followers</strong></label>
                                <p id="followers">{FOLLOWERS}</p>
                            </div>
                            <div>
                                <label htmlFor="following"><strong>Following</strong></label>
                                <p id="following">{FOLLOWING}</p>
                            </div>
                            <div>
                                <label htmlFor="gists"><strong>Gists</strong></label>
                                <p id="gists">{GISTS}</p>
                            </div>
                            <div>
                                <label htmlFor="repos"><strong>Repos</strong></label>
                                <p id="repos">{REPOS}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="profile">

                </div>
            )
        }
    }


}
export default Profile