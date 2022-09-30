/* function MainContent() {
    return (
        <div class="main">
        Greetings, Planet!
    </div>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
        </div>,
        document.getElementById("root")

) */
/* 
ReactDOM.render(
    <h1 className="header">This is a declarative way to program
    </h1>, document.getElementById("root")
    )

const h1 = document.createElement("hi")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1) */


import React from "react"
import ReactDOM from "react-dom"

const navbar = (
    <div>
        <h1>Mady's BBQ</h1>
        <ul>
            <li>Pricing</li> 
            <li>About</li> 
            <li>Contact</li> 
        </ul>
    </div>
)


ReactDOM.render(
    navbar, document.getElementById("root")
)
