import React from "react";
import { Link } from 'react-router-dom';
import '../../css/Users.css'

export default class Users extends React.Component {
  state = {
    formInput: ""
  };

  handleChange = (e) => {
    this.setState( { formInput: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let user = this.props.users.find(user => {
      return user.name.toLowerCase().indexOf(this.state.formInput.toLowerCase()) === 0
    })
    this.props.history.push(`/users/${user.id}/posts`)
  }

  render() {
    let displayUsers = this.props.users.map(user => {
      if(user.name.toLowerCase().indexOf(this.state.formInput.toLowerCase()) === 0) {
        return (
          <li key={user.id}>
            <Link to={"/users/" + user.id + "/posts"} >{user.name}</Link>
          </li>
        )
      } else {
        return null;
      }
    })
    return (
      <div className="users">
      <h1>USERS PAGE</h1>
        <form onSubmit={this.handleSubmit}>
          Enter A Name:
          <input type="text" value={this.state.formInput} onChange={this.handleChange}/>
          <input type="submit" value="SUBMIT OR HIT ENTER"/>
        </form >
        <ul>
          {displayUsers}
        </ul>
      </div>
    );
  }
}
