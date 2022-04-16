export class UserClass {
    name!: string
    login!: string
    public_repos!: number
    followers!: number
    following!: number
    avatar_url!: string
    url!: string

    constructor(name: string, login: string, public_repos: number, followers: number, following: number, avatar_url: string, url: string) {
        this.name = name
        this.login = login
        this.public_repos = public_repos
        this.followers = followers
        this.following = following
        this.avatar_url = avatar_url
        this.url = url
    }
}
