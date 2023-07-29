import React from "react";

class UserClass extends React.Component{
    constructor(props) {
        super(props)
       this.state = {
        userInfo:{
            name: "dummy",
            location : "xyz",
            avatar : "http/dummy-photo"
        }
       }
    }
   async  componentDidMount() {
       const data = await fetch("https://api.github.com/users/akshaymarch7")
       const json = await data.json();
        this.setState({userInfo:json})
       console.log(json);
    }
   
    render() {
       const {name,location,avatar_url} = this.state.userInfo;
        return(
            <div>
                 <h2>Name: {name}</h2>
                   <img src = {avatar_url} />
                 <h3>Location: {location}</h3>
                <h4>Contact:@yashrawat21</h4>
            </div>
        )
    }
}
export default UserClass; 