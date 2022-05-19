// Account Login Memory

let isLoggedIn = false
let loggedInUser = null

// Account Login

const login__username_input = document.querySelector("#login__username-input")
const login__password_input = document.querySelector("#login__password-input")
const login__submit = document.querySelector("#login__submit")
const login__error = document.querySelector("#login__error")

login__submit.addEventListener("click", () => {
    let login__catch_account = false

    users.forEach(u => {
        if (
            u.password === TextToBin(login__password_input.value)
            &&
            u.username === login__username_input.value
        ) {
            u.login()
            document.location.href = "#home"
            login__catch_account = true
            login__error.classList.add("hidden")
            isLoggedIn = true
            loggedInUser = u
            setupUser()
            return false
        }
    })

    if (!login__catch_account) {
        login__error.classList.remove("hidden")
        login__error.innerText = "Username or Password was incorrect. Please try again."
    }
})

// Account Sign Up

const signup__username_input = document.querySelector("#signup__username-input")
const signup__password_input = document.querySelector("#signup__password-input")
const signup__submit = document.querySelector("#signup__submit")
const signup__error = document.querySelector("#signup__error")

signup__submit.addEventListener("click", () => {
    let signup__catch_dupe = false
    users.forEach(u => {
        if (u.username === signup__username_input.value) {
            signup__catch_dupe = true
            return false
        }
    })

    if (signup__catch_dupe) {
        signup__error.classList.remove("hidden")
        signup__error.innerText = "Username already taken, try another?"
        return false
    }

    if (signup__password_input.value.length >= 8) {
        users.push(new User(signup__username_input.value, signup__password_input.value))
        document.location.href = "#login"
        signup__error.classList.add("hidden")
    } else {
        signup__error.classList.remove("hidden")
        signup__error.innerText = "Password is too short. Consider changing it."
    }
})

// Account Logged In Data

function setupUser() {
    if (isLoggedIn === true && loggedInUser !== null) {
        document.querySelectorAll(".visible-logged-in").forEach(e => {
            e.classList.remove("hidden")
        })

        document.querySelectorAll(".invisible-logged-in").forEach(e => {
            e.classList.add("hidden")
        })

        document.querySelectorAll(".invisible-non-admin").forEach(e => {
            if (!loggedInUser.isAdmin) {
                e.classList.add("hidden")
            } else {
                e.classList.remove("hidden")
            }
        })
    } else {
        document.querySelectorAll(".visible-logged-in").forEach(e => {
            e.classList.add("hidden")
        })

        document.querySelectorAll(".invisible-logged-in").forEach(e => {
            e.classList.remove("hidden")
        })
    }
}
