import React, { Component } from 'react'

class UserItem extends Component {
    state = {
        id: 'id',
        login: 'RSP531',
        avatar_url: 'https://avatars3.githubusercontent.com/u/50122770?v=4',
        html_url: 'https://github.com/RSP531'
      }
  render() {
    const {login, html_url, avatar_url} = this.state;
    return (
      <div className="card text-center">
        <img 
        src ={avatar_url} 
        alt="" className="round-img" 
        style={{width: '60px'}}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">MORE</a>
        </div>
      </div>
    )
  }
}

export default UserItem
