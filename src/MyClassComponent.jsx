import React, { Component } from 'react'

export default class MyClassComponent extends Component {
    constructor(props){
        super(props);
        console.log('initialization phase...');
        this.state = {
            myname:"abcpqr"
            // myname:this.props.userdata
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({myname:"UpdateName"})
        },2000)
        console.log('Component did mount called..');
    }
    static getDerivedStateFromProps(){
        console.log('getDerived state from props calling..');
        return true;
    }
    shouldComponentUpdate(){
        console.log('component update...!');
        return true;
    }
    componentDidUpdate(){
        console.log('did update calling.....');
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("previous props "+prevProps.userdata);
        console.log("previous state "+prevState.myname);
        return true;
    }
    componentWillUnmount(){
        console.log("component mounting done..!");
    }
   
  render() {
    console.log('Render calling...');
    return (
        <>
            <div>MyClassComponent</div>
            {/* <h3>My Name is -- {this.state.myname}</h3> */}
            <h3>My Name is -- {this.state.myname}</h3>
            <button onClick={()=>this.setState({myname:"Newname"})}>CliCk</button>
        </>
    )
  }
}
