import React, { PropTypes } from 'react';
import {Link} from 'react-router';


class Nav extends React.Component {
  render () {
    let styles={
      root:{
        width:"100%",
        height:"40px",
        backgroundColor:'#8BC34A'
      },
      link:{
        display:'block',
        textDecoration:'none',
        width:'33.33%',
        height:'40px',
        float:'left',
        color:'#fff',
        textAlign:'center',
        fontWeight:'600',
        lineHeight:'40px'
      }
    }
    return(
      <div style={styles.root}>
        <Link style={styles.link} to="/" activeStyle={{color:'#7C4DFF'}} onlyActiveOnIndex={true}>List</Link>
        <Link style={styles.link} to="/complete" activeStyle={{color:'#7C4DFF'}}>Complete</Link>
        <Link style={styles.link} to="/active" activeStyle={{color:'#7C4DFF'}}>Active</Link>
      </div>
    )
  }
}

export default Nav;
