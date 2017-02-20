
import React, { PropTypes } from 'react'

class Work extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      pic:[]
    }
  }
  componentDidMount(){
      this.setState({
        data:["txt1","txt2","txt3","txt4"],
        pic:["pic1","pic2","pic3","pic4"]
      })
  }
  hand(){
    this.state.data.map( (item,i) => document.getElementById(item).innerHTML ='Git是一个分布式的版本控制系统，最初由Linus Torvalds编写，用作Linux内核代码的管理。在推出后，Git在其它项目中也取得了很大成功，尤其是在Ruby社区中。目前，包括Rubinius和Merb在内的很多知名项目都使用了Git。Git同样可以被诸如Capistrano和Vlad the Deployer这样的部署工具所使用。同样，eoe.cn客户端的源码也托管在github上。')
    // document.write=a
    this.state.pic.map( (d,i) => document.getElementById(d).firstChild.firstChild.style.width='60%')
    // let b=document.getElementsByClassName('work-card')
    // console.log(b.join(","));
  }
  handout(){
    this.state.data.map( (item,i) => document.getElementById(item).innerHTML='')
    this.state.pic.map( (d,i) =>document.getElementById(d).firstChild.firstChild.style.width='100%')
  }
  render () {
    return(
      <div className="work-container">
        <div className="work-card" onMouseOver={this.hand.bind(this)} onMouseOut={this.handout.bind(this)} id="pic1">
          <a href="#"><img src="http://odr4qggss.bkt.clouddn.com/01.png"/>
          <p id="txt1"></p>
          </a>
          <div className="work-text">
            <h3>作品一</h3>
            <span>2016.09.22</span>
          </div>
        </div>
        <div className="work-card" onMouseOver={this.hand.bind(this)} onMouseOut={this.handout.bind(this)}  id="pic2">
          <a href="#"><img src="http://odr4qggss.bkt.clouddn.com/2.png"/>
          <p id="txt2"></p>
          </a>
          <div className="work-text">
            <h3>作品二</h3>
            <span>2016.09.22</span>
          </div>
        </div>
        <div className="work-card" onMouseOver={this.hand.bind(this)} onMouseOut={this.handout.bind(this)} id="pic3">

          <a href="#"><img src="http://odr4qggss.bkt.clouddn.com/6.jpg"/>
          <p id="txt3"></p>
          </a>
          <div className="work-text">
            <h3>作品三</h3>
            <span>2016.09.22</span>
          </div>
        </div>
        <div className="work-card" onMouseOver={this.hand.bind(this)} onMouseOut={this.handout.bind(this)} id="pic4">
          <a href="#"><img src="http://odr4qggss.bkt.clouddn.com/7.jpg"/>
          <p id="txt4"></p>
          </a>
          <div className="work-text">
            <h3>作品四</h3>
            <span>2016.09.22</span>
          </div>
        </div>


      </div>
    )
  }
}

export default Work;
