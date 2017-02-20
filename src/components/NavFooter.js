import React, { PropTypes } from 'react'
import { Link } from 'react-router';
class NavFooter extends React.Component {

  render () {
    return(
    <div className="nav-footer">
        <Link activeStyle={{color:'#03A9F4'}} to="/" onlyActiveOnIndex={true}  ><span className="glyphicon glyphicon-home"><p>Home</p></span></Link>
        <Link activeStyle={{color:'#03A9F4'}} to="/blog"><span className="glyphicon glyphicon-book"><p>Blog</p></span></Link>
        <Link activeStyle={{color:'#03A9F4'}} to="/work"><span className="glyphicon glyphicon-list-alt"><p>Work</p></span></Link>
        <Link activeStyle={{color:'#03A9F4'}} to="/about"><span className="glyphicon glyphicon-hand-right"><p>About</p></span></Link>
    </div>
    )
  }
}
export default NavFooter;
