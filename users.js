const math = {
    random: (x) => {
        let i = Math.floor(Math.random() * x)
        return i
    }
}

let users = []

class User {
    constructor(username, password) {
        this.id = math.random(999999999)
        this.username = username
        this.profilePic = "assets/pfps/pfp1.svg"
        password = TextToBin(password)
        this.password = password
        this.isOnline = false
        this.isAdmin = false
    }

    login() {
        this.isOnline = true
        console.log(`${this.username} (${this.id}) just now logged in.`)
        return this
    }

    logout() {
        this.isOnline = false
        isLoggedIn = false
        loggedInUser = null
        console.log(`${this.username} (${this.id}) just now logged out.`)
        return this
    }
}

class Admin extends User {
    // constructor() {
    //     super()
    //     this.isAdmin = true
    // }


    deleteUser(user) {
        users = users.filter(u => {
            return u.id !== user.id
        })
        return this
    }
}

users.push(new Admin("admin", "admin"))
users[0].isAdmin = true
users.push(new User("GlitchieTheDev", "krishaangSinha0"))