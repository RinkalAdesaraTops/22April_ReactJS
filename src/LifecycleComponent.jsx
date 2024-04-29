import React, { Component } from 'react'

export default class LifecycleComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            rollno:101,
            st_name:"Abc",
            course:"Fullstack",
            counter:0
        }
    }
    componentDidMount(){
        console.log('component did mount called...');
        setTimeout(()=>{
            this.setState({
                rollno:102
            })
        },3000)      
    }
    static getDerivedStateFromProps(props,state){
        console.log("props value "+props.course);
        console.log("state value "+state.course);
        state.course = props.course;
        return {state};
    }
    shouldComponentUpdate(){
        console.log('component update called...');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Previous state is "+prevState.course);
    }
  render() {
    return (
        <>
            <div>LifecycleComponent</div>

            <h3>Counter is  - {this.state.counter}</h3>
            <h3>Roll No is - {this.state.rollno}</h3>
            <h3>Course Name is - {this.state.course}</h3>
            <button onClick={()=>this.setState({course:"FrontEnd"})}>Click</button>
            <button onClick={()=>this.setState({counter:this.state.counter+1})}>Counter Click</button>
        </>
    )
  }
}
