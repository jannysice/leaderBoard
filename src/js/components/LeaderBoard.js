import React from "react"
import { connect } from "react-redux"
import * as actions from "../actions/actions"
import TableRow from "./TableRow"

@connect((store) => {
    return {
        store:store
    };
})
export default class LeaderBoard extends React.Component {
    sortByLastMonth(){
        this.props.dispatch(actions.sortByLastMonth())
    }
    sortByAllTime(){
        this.props.dispatch(actions.sortByAllTime())
    }
    fetchUsers(){
       this.props.dispatch(actions.fetchAllTimeUsers())
       this.props.dispatch(actions.fetchLastMonthUsers())
    } 
    componentWillMount() {
       this.fetchUsers()
       setTimeout(()=> this.sortByLastMonth(),1500)
       
    }


    render() {
        const { sortedByAllTime, users } = this.props.store;
        const tableEntries = users.map((user, idx) =>
            <TableRow key={idx} idx={idx +1} user={user} />
        );
        return (
            <table class="table">
            <thead>
                <tr>
                    <th class="table-header">#</th>
                    <th class="table-header">Camper Name</th>
                    <th class="table-header" onClick={this.sortByLastMonth.bind(this)}> Point in past 30 days {sortedByAllTime ? "" : "▼"}</th>
                    <th class="table-header" onClick={this.sortByAllTime.bind(this)}>All Time points {sortedByAllTime ? "▼" : ""}</th>
           
                </tr>
            </thead>
            <tbody>
                {tableEntries}
            </tbody>
        </table>)
    }
}