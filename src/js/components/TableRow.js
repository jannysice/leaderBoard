import React from "react"
export default class TableRow extends React.Component {
    render() {
        const { user, idx } = this.props;
        return (
        <tr>
            <td>{idx}</td>
            <td><img src={user.img}/>   {user.username} </td>
            <td>{user.recent}</td>
            <td>{user.alltime}</td>
        </tr>);
    }
}