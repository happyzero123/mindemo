import React, { PropTypes } from 'react';
import BlogCard from '../components/BlogCard';
import { getJson } from '../utils/helpers';

import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    getJson()
      .then( (recData) => {
        // console.log(recData.getJson);
        this.setState({
          data:recData.getJson,
          wait:false
        })
      });
  }
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }
  render () {

    return(
      <div style={{width:'100%'}}>

        {this.state.wait ? <div className="wait" ><CircularProgress size={2} /></div> : this.state.data.map( (item,i) => <BlogCard{...item} key={i} /> )}
      </div>
    )
  }
}
Blog.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};
export default Blog;
