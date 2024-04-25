import React, { Component } from 'react'

export default class MyClassComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            // myname:"abcpqr"
            myname:this.props.userdata
        }
    }
  render() {
    return (
        <>
            <div>MyClassComponent</div>
            <h3>My Name is -- {this.state.myname}</h3>
            <button onClick={()=>this.setState({myname:"Newname"})}>CliCk</button>
        </>
    )
  }
}
