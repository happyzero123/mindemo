import React, { PropTypes } from 'react'
import { Link } from 'react-router';

class LeftNav extends React.Component {
  render () {
    return(
      <div className="LeftNav">
          <h3>张小晓@{this.props.title}</h3>
          <Link activeStyle={{color:'#03A9F4'}} to="/" onlyActiveOnIndex={true}  ><p className="glyphicon glyphicon-home"></p><span>Home</span></Link>
          <Link activeStyle={{color:'#03A9F4'}} to="/blog"><p className="glyphicon glyphicon-book"></p><span>Blog</span></Link>
          <Link activeStyle={{color:'#03A9F4'}} to="/work"><p className="glyphicon glyphicon-list-alt"></p><span>Work</span></Link>
          <Link activeStyle={{color:'#03A9F4'}} to="/about"><p className="glyphicon glyphicon-hand-right"></p><span>About</span></Link>
      </div>
    )
  }
}

export default LeftNav;
