import React, { PropTypes } from 'react'
import { hashHistory } from 'react-router';
import { Link } from 'react-router';


class BlogCard extends React.Component {
  render () {
    let styles={
      root:{
        width:'90%',
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        boxRadius:'5px',
        margin:'20px auto',
        paddingTop:'1px'
      },
      index:{
        textAlign:'center',
        height:'80px',
        paddingTop:'10px',
        borderRadius: '10px',
        backgroundColor:'#512DA8',
        margin:'9px 10px'
      },
      num:{

        lineHeight:'60px',
        width:'60px',
        height:'60px',
        borderRadius:'50%',
        border: '2px solid #fff',
        display:'block',
        fontSize:'24px',
        margin:'0px auto',
        color:'#fff'
      },
      content:{
        padding:'20px',
        color:'#666'
      },
      title:{
        fontSize:'22px',
        marginBottom:'20px'
      },
      desc:{
        fontSize:'16px',
        marginBottom:'20px'
      },
      btn:{
        display:'block',
        width:'100px',
        height:'30px',
        lineHeight:'30px',
        border:'1px solid red',
        borderRadius:'20px',
        textAlign:'center',
        color:'red'
      }
    }
    let address=`item/${this.props.url}`;
    return(
      <div style={styles.root}>
        <div style={styles.index}>
          <p style={styles.num}>{this.props.index}</p>
        </div>
        <div style={styles.content}>
          <p style={styles.title}>{this.props.title}</p>
          <p style={styles.desc}>{this.props.desc}</p>
          <Link to={address} style={styles.btn} >阅读更多</Link>
        </div>
      </div>
    )
  }
}
BlogCard.defaultProps={
   index:1,
   title:'这里是标题',
   desc:'这里是介绍'
}
BlogCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default BlogCard;
