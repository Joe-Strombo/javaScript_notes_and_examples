import React from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import data from "./data"

export default function App() {
    
    const cards = data.map(item => {
        return (
            <Card
                imageUrl={item.imageUrl}
                location={item.location}
                title={item.title}
                date={item.data}
                description={item.description}
            />               
        )
    })
    
    return (
        <div>
            <Header />
            {cards}
        </div>
    )
}