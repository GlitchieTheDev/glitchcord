window.addEventListener("load", () => {
    setupUser()
    renderUsersList()
    console.log("Data successfully loaded.")
})

setInterval(() => {
    if (document.location.pathname === "/" && (document.location.hash === "" || document.location.hash === "#")) {
        window.location.href = "#home"
    } else if (document.location.hash === "#logout") {
        if (isLoggedIn === true && loggedInUser !== null) {
            loggedInUser.logout()
            loggedInUser = null
            isLoggedIn = false
            setupUser()
        }
        window.location.href = "#login"
    }

    renderUsersList()
}, 500)

function renderUsersList() {
    var userTemp = document.querySelector("#userlist_user__temp")
    document.querySelector("#navigation-users-list").innerHTML = `<li id="userlist_user__temp" class="hidden"> <div class="userlist_user"> <img src="assets/pfps/pfp1.svg"> <span>Admin</span> </div> <div class="overlay"></div> </li>`
    users.forEach(u => {
        let nodes = userTemp.cloneNode(true)
        let nodes_img = nodes.querySelector(".userlist_user > img")
        let node_name = nodes.querySelector(".userlist_user > span")
        document.querySelector("#navigation-users-list").appendChild(nodes)
        nodes.classList.remove("hidden")
        nodes_img.src = u.profilePic
        node_name.innerText = u.username
        nodes.id = ""
        if (u.isAdmin) {
            nodes.classList.add("adminuser")
        } else {
            nodes.classList.add("user")
        }

        nodes.addEventListener("contextmenu", (e) => {
            e.preventDefault()

            let g = document.querySelector("div[data-for='user']")

            let selection = e.target
            // console.log(selection); //before

            while (selection.tagName !== "LI") {
                selection = selection.parentElement
            }

            // console.log(selection); //after

            g.classList.remove("hidden")

            g.style.left = e.clientX + "px"
            g.style.top = e.clientY + "px"

            if (e.clientX > ( window.innerWidth - 200)) {
                g.style.left = (e.clientX - 200) + "px"
            }

            document.addEventListener("click", (x) => {
                let choice = x.target.innerText
                // console.log(choice)
                
                if (choice === "Delete User") {
                    for (let i = 0; i < users.length; i++) {
                        if (users[i].username === selection.querySelector("span").innerText) {
                            console.log(`${loggedInUser.username} (${loggedInUser.id}) deleted the user ${users[i].username} (${users[i].id})`)
                            loggedInUser.deleteUser(users[i])
                        }
                    }
                }


                g.classList.add("hidden")
            }, {once: true})
        })
    });
}

document.addEventListener("contextmenu", (e) => {
    // e.preventDefault()
})





