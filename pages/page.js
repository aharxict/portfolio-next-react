import React, { Component } from 'react';

import axios from 'axios';

class Page extends Component {

  static async getInitialProps() {
    let users = [];
    try {
      const responce = await axios.get('https://jsonplaceholder.typicode.com/users');
      users = responce.data;
    } catch (e) {
      console.error(e);
    }
    return {users};
  }

  renderUsers() {
    return this.props.users.map((user, index) => {
      return (
        <li key={index}>
          <span>
            {user.name}
          </span>
          {' - '}
          <span>
            {user.email}
          </span>
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <h1>Some page with prerendered data from server!</h1>
        <div>Users list:</div>
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

export default Page;