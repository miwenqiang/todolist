import React from 'react';

import Add from './Add.js';
import Navbar from'./Navbar.js';
import List from'./List.js';
import Complete from'./Complete.js';
import Active from'./Active.js';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      listData:[]
    }
  }
  handleChange(data){
    this.setState({
      listData:data
    })
  }
  render () {
    let styles={
      root:{
        width:'50vw',
        margin:'0 auto',
        backgroundColor:'#f4f3f3'
      },
      h1:{
        backgroundColor:'#689F38',
        textAlign:'center',
        width:'100%',
        height:'50px',
        lineheight:'50px',
        color:'#fff',
        margin:'0',
        padding:'0'
      }
    }
    return(
      <div style={styles.root}>
        <h1 style={styles.h1}>To Do List</h1>
        <Add onAdd={this.handleChange.bind(this)} todo={this.state.listData}/>
        <Navbar />
        {this.props.children && React.cloneElement(this.props.children, {
          "todo":this.state.listData,"onDel":this.handleChange.bind(this)})}
      </div>
    )
  }
}

export default App;
