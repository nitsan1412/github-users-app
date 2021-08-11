import React from "react";
import "./UserInfo.css" 
import {Card,Button} from 'react-bootstrap'

function UserInfo (props) {
  return (
    <Card style={{ width: '18rem' }} className= "col-6 cards">
       <button className= "removeBtn" onClick={() =>props.removeUser(props.user.login)}>X</button>
       <Card.Img variant="top" src={props.user.avatar_url} className="images"/>
          <h1 className="cardHeader">{props.user.login}</h1>
          <ul>
            <li>Followers: <strong>{props.user.followers}</strong> </li>
            <li>Following: <strong>{props.user.following}</strong> </li>
            <li>Joined Github: <strong>{props.user.created_at}</strong></li>
          </ul>
        <Button variant="info" href={props.user.html_url}>Go to <strong>{props.user.login}</strong> Github Page</Button>
    </Card>     )
}

export default UserInfo

