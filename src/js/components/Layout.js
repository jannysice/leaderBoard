import React from "react"
import LeaderBoard from "./LeaderBoard"

export default class Layout extends React.Component {
    render(){
        return(
        <div>
            <h2>FreeCodeCamp LeaderBoard of Campers</h2>
            <LeaderBoard />
        </div>)
    }
}