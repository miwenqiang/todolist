import React, { PropTypes } from 'react'

class Active extends React.Component {
  handleClick(key){
    var data=this.props.todo
    data.splice(key,1)
    this.props.onDel(data)
  }
  handleChange(key){
    var data=this.props.todo
    data[key].isComplete = true
    this.props.onDel(data)
  }
  render () {
    let styles={
      root:{
        width:'100%',
        padding:'0',
        margin:'0',
        backgroundColor:'#f5f5f5'
      },
      li:{
        listStyle:'none',
        width:'100%',
        height:'40px',
        padding:'0',
        margin:'10px 0',
        backgroundColor:'#448AFF'
      },
      span:{
        display:'inline-block',
        marginLeft:'10%',
        width:'10%',
        textAlign:'center',
        height:'40px',
        lineHeight:'40px'
      },
      label:{
        display:'inline-block',
        width:'45%',
        textAlign:'center',
        height:'40px',
        lineHeight:'40px'
      },
      button:{
        marginLeft:'2.5%',
        width:'15%',
        height:'25px',
        textAlign:'center',
        lineHeight:'25px',
        border:'none',
        backgroundColor: 'deeppink',
        borderRadius:'5px'
      }
    }
    let list=[]
    for (var i = 0; i < this.props.todo.length; i++) {
      if(!this.props.todo[i].isComplete){
      list.push(
          <li style={styles.li} key={i}>
            <span style={styles.span}>○</span>
            <label style={styles.label}>{this.props.todo[i].newthing}</label>
            <button style={styles.button} onClick={this.handleClick.bind(this,i)}>Delete</button>
            <button style={styles.button} onClick={this.handleChange.bind(this,i)}>Finish</button>
          </li>)
      }
    }
    return(
      <ul style={styles.root}>
        {list}
      </ul>
    )
  }
}

export default Active;
