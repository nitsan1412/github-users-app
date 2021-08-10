import React from "react";
import "./UserInfo.css" 

function UserInfo (userData) {
  return (
    <div>
       <ul>
       <li><img src= {userData.user.avatar_url}/></li>
      <li>Username: {userData.user.login} </li>
      <li>Followers: {userData.user.followers} </li>
      <li>Following: {userData.user.following} </li>
      <li>Created at: {userData.user.created_at}</li>
      </ul>
    </div>
     )
}

export default UserInfo