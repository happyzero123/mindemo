import React, { PropTypes } from 'react';
import { getMd } from '../utils/helpers';
import marked from 'marked';
import hlJs from 'highlight.js';

class Item extends React.Component {
  constructor(){
    super();
    this.state={
      data:' ',
      wait:true
    }
  }
  componentDidMount(){
    let add = this.props.params.url;
    getMd(add)
      .then( (recData) => {
        // console.log(recData.getJson);
        this.setState({
          data:recData.getMd,
          wait:false
        })
      });
  }
  render () {
    marked.setOptions({
      highlight: function (code) {
        return hlJs.highlightAuto(code).value;
      }
    });
    let zz =this.state.wait ? '请稍等......' : marked(this.state.data);
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html:zz}} className="post-content"></div>
      </div>
    )
  }
}

export default Item;
