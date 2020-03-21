import React, { Component } from 'react'
import UserItem from './UserItem';

export class Users extends Component {
  state = {
    users:[
      {
        id: '1',
        login: 'RSP531',
        avatar_url: 'https://avatars3.githubusercontent.com/u/50122770?v=4',
        html_url: 'https://github.com/RSP531'
      },
      {
        id: '2',
        login: 'RSP531',
        avatar_url: 'https://avatars3.githubusercontent.com/u/50122770?v=4',
        html_url: 'https://github.com/RSP531'
      },
      {
        id: '3',
        login: 'RSP531',
        avatar_url: 'https://avatars3.githubusercontent.com/u/50122770?v=4',
        html_url: 'https://github.com/RSP531'
      }
    ]
  }
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
}

export default Users
