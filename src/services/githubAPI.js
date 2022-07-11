class GitHubAPI {
    constructor(typeOfAPI) {
        this.typeOfAPI = typeOfAPI
    }
    async search(userName) {
        if (this.typeOfAPI === 'profile') {
            try {
                const req = await fetch(`https://api.github.com/users/${userName}`, { method: 'GET' })
                const response = await req.json()
                return response
            } catch {
                return false
            }

        } else if (this.typeOfAPI === 'repos') {
            const req = await fetch(`https://api.github.com/users/${userName}/repos`, { method: 'GET' })
            const response = await req.json()
            return response
        } else {
            const req = await fetch(`https://api.github.com/users/${userName}/starred`, { method: 'GET' })
            const response = await req.json()
            return response
        }

    }

}
class ProfileAPI extends GitHubAPI {
    constructor() {
        super('profile')
    }
}
class ReposAPI extends GitHubAPI {
    constructor() {
        super('repos')
    }
}
class StarredAPI extends GitHubAPI {
    constructor() {
        super('starred')
    }
}
export { ProfileAPI, ReposAPI, StarredAPI }