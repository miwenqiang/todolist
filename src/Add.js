import React, { PropTypes } from 'react'

class Add extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isComplete:false
    }
  }
  handleClick(){
    let value=this.refs.inputVal.value;
    let data=this.props.todo;
    let newLi={newthing:value,isComplete:this.state.isComplete}
    if(value!=""){data.push(newLi)}
    this.props.onAdd(data)
  }
  render () {
    let styles={
      root:{
        width:'100%',
        height:'40px',
      },
      input:{
        width:'70%',
        border:'none',
        height:'40px',
        lineHeight:'40px',
        textAlign:'center',
        padding:'0'
      },
      button:{
        width:'30%',
        height:'42px',
        textAlign:'center',
        lineHeight:'42px',
        border:'none',
        backgroundColor: '#448AFF'
      }
    }
    return(
      <div style={styles.root}>
        <input style={styles.input} ref="inputVal" type="text" placeholder="please add a newthing"/>
        <button style={styles.button} onClick={this.handleClick.bind(this)}>Add</button>
      </div>
    )
  }
}

export default Add;
