import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src="https://source.unsplash.com/WLxQvbMyfas" className="img--test" />
            <img src={`../data/${props.img}`} className="card--img" />
            <span className="card--location">{props.location}</span>
            <span className="card--title">{props.title}</span>
            <span className="card--date">{props.date}</span>
            <span className="card--description">{props.description}</span>
        </div>
    )
}
