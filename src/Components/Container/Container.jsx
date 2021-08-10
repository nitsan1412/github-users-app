import React from "react"
import UserInfo from "../UserInfo/UserInfo"
import axios from "../../../node_modules/axios/dist/axios.js"
import "./Container.css" 


class Container extends React.Component {
    constructor() {
      super()
      this.state = {
        usersArr: ["ShaniBel","Nati-Dor","odeliamelloul", "Sparco7", "nitsan1412","leib-ran","Fareska","Harduf-l","shaharbest"],
        infoArrUsers: []
      }
    }
    componentDidMount= () => {

        for (let i = 0; i < this.state.usersArr.length; i++) {
            const response = axios
            .get(`https://api.github.com/users/${this.state.usersArr[i]}`)
            .then((response) => {
                let arr = [...this.state.infoArrUsers]
                let {avatar_url,login,followers,following,created_at} = response.data
                let objUser = {avatar_url,login,followers,following,created_at}
                arr.push(objUser)
                this.setState({infoArrUsers:arr})
            })
            .catch((err) => console.log(err));
        }
    }
      render () {
            return (
                <div>
                {this.state.infoArrUsers.map((user,index) => 
                 <UserInfo user ={user} key= {index}/>
                 )}
        </div>
      )
    }
  }
  
  export default Container;