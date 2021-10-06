import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'






export class App extends Component {

  constructor(props){
    super(props)
    this.state={
      isLoggedin : false
    }
  }

   responseFacebook=(response)=>{
    console.log(response);
    this.setState({
      isLoggedin : true,
      userId:response.userId,
      name:response.name,
      email:response.email,
      picture:response.picture.data.url
    })
  }

 render() {
    return (

      this.state.isLoggedin ? 
      (
            <div>
              <table striped bordered hover>
                <thead>
                <tr>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>EMAIL</th>
                </tr>
                </thead>
                <tbody>
                <tr>
              <td>
              <img src={this.state.picture} alt={this.state.name}/></td>
             <td>  {this.state.name}</td>
             <td>  {this.state.email}</td>
             </tr>
             </tbody>
             </table>
            </div>
      ) :
       
       (<div>
        <FacebookLogin
          appId="261884755839531"
          autoLoad={true}
          fields="name,email,picture"
         
          callback={this.responseFacebook} />
      </div>)
    )
  }
}

export default App

