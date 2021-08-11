import React from "react"
import UserInfo from "../UserInfo/UserInfo"
import axios from "axios"
import FormInput from "../FormInput/FormInput"
import "./Container.css" 

class Container extends React.Component {
    constructor() {
      super()
      this.state = {

        usersArr: JSON.parse(localStorage.getItem("users")) || ["ShaniBel","Nati-Dor","odeliamelloul", "Sparco7", "nitsan1412","leib-ran","Fareska","Harduf-l","shaharbest"],
        infoArrUsers: [],
        newUser : ""
      }
    }
    getNormalDate = (date) => {
      let year = date.slice(0,4)
      let month = date.slice(5,7)
      let day = date.slice(8,10)
      return `${day}/${month}/${year}`
     }

    callAxios = (user) => {
     const response = axios
            .get(`https://api.github.com/users/${user}`)
            .then((response) => {
              if (response){
                let {avatar_url,login,followers,following,created_at,html_url} = response.data
                let objUser = {avatar_url,login,followers,following,created_at,html_url}
                let correctDate = this.getNormalDate(objUser.created_at)
                objUser.created_at = correctDate;
                this.setState({infoArrUsers:[...this.state.infoArrUsers,objUser]})
              }
            })
            .catch((err) => console.log(err));
        }
      
    handleUpdateState = (e) => {
      this.setState({newUser: e.target.value})
    }

     addUser = (e) => {
      console.log("usersArr is : " +this.state.usersArr)

       if (!this.state.usersArr.includes(this.state.newUser)){
        console.log(this.state.newUser)
         this.callAxios(this.state.newUser)
         this.setState((state) => ({
          usersArr:[this.state.newUser,...this.state.usersArr]
         }))
        localStorage.setItem("users", JSON.stringify(this.state.usersArr))
        this.setState({newUser:""})
        console.log(this.state.usersArr)

       }
    }

     componentDidMount= () => {

      for (let i = 0; i < this.state.usersArr.length; i++) {
        let user = this.state.usersArr[i];
        this.callAxios (user);
        }
        localStorage.setItem("users", JSON.stringify(this.state.usersArr))

     }

     removeUser = (userRemoved) => {
      let temp = [...this.state.usersArr]
      let newUsersArr = temp.filter((user) => user.login !== userRemoved.login)
      localStorage.setItem("users", JSON.stringify(newUsersArr))
      this.setState({usersArr: newUsersArr})
  }
     
      render(){
            return (
              <div>
                <div className="row">
                  <h1 className="main_headline">Github Users</h1>
                </div>
                <div className="row">
                    <FormInput handleUpdateState={this.handleUpdateState} addUser={this.addUser} newUser={this.state.newUser}/>
                </div>
                <div className= "allUsersInfo container" >
                       <div className= "row">
                          {this.state.infoArrUsers.map((user,index) => 
                          <UserInfo removeUser={this.removeUser} user ={user} key= {index}/>
                          )}
                       </div>                   
                </div>
              </div>
      )
    }
  }


  export default Container;