export class UserClass {
    login!: string
    public_repos!: number
    followers!: number
    following!: number
    avatar_url!: string
    html_url!: string

    constructor(login: string, public_repos: number, followers: number, following: number, avatar_url: string, html_url: string) {
        this.login = login
        this.public_repos = public_repos
        this.followers = followers
        this.following = following
        this.avatar_url = avatar_url
        this.html_url = html_url
    }
}
