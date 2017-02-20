import React, { PropTypes } from 'react'
import Ability from './Ability'
import Message from './Message'
class About extends React.Component {
  render () {
    let styles={
      center:{
        margin:'10vh auto',
        textAlign:'center'
      },
      title:{
        color:'teal',
        fontWeight:'600',
        marginBottom:'8vh'
      },
      call:{
        color:'red',
      },
      phone:{
        color:'blue',
        marginBottom:'10vw'
      }
    }
    return(
    <div style={styles.center}>
      <Message />
      <Ability/>
      <h2 style={styles.title}>联系我</h2>

      <h4 style={styles.call}>CALL ME:</h4>
      <h3 style={styles.phone}>13621325129</h3>

    </div>
    )
  }
}

export default About;
