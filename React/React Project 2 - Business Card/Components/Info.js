import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img src="./images/IMG-1021.JPG" className="selfie" />
            <h1>Joseph Stromboli</h1>
            <p>Front End Developer</p>
            <a href="http://www.josephstromboliweb.wordpress.com">
            josephstromboliweb.wordpress.com</a>
            <div className="buttons">
                <button className="email-button"><img src="./images/Mail.png" className="mail-icon"/>
                Email</button>
                <button className="linkedin-button">
                <img src="./images/linkedin.png" className="linkedin-logo" />
                LinkedIn</button>
            </div>
    </div>
    )
}