import React, { PropTypes } from 'react'

class Message extends React.Component {
  render () {
    let styles={
      root:{
        width:'10vw',
        height:'10vw',
        borderRadius:'50%',
        display:'block',
        margin:'0 auto',
        backgroundImage:'url(http://odr4qggss.bkt.clouddn.com/1.jpg)',
        backgroundSize:'cover'
      },
      cen:{
        width:'30vw',
        marginLeft:'34%'
      },
      li:{
        marginTop:'2vw',
        listStyleType: 'none',
        fontSize:'1vw',
        textAlign:'left',
        lineHeight:'2vw',
        color:'teal'
      }
    }
    return(
      <div>
        <div  style={styles.root} className="logo"></div>
        <div style={styles.cen}>
          <ul style={styles.li}>
            <li>姓名  ： 张小晓</li>
            <li>性别  ： 女</li>
            <li>年龄  ： 23岁</li>
            <li>籍贯  ： 吉林</li>
            <li>学历  ： 本科</li>
            <li>专业  ： 计算机科学与技术</li>
            <li>学校  ： 石家庄建工科技学院</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Message;
