
import React, { PropTypes } from 'react'
import { findDOMNode } from 'react-dom';

class Work extends React.Component {
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  componentWillMount(){
      this.setState({
        data:[{id:"text1",src:"http://odr4qggss.bkt.clouddn.com/01.png",h3:'作品一',span:'2016.09.22',key:'p1'},
              {id:"text2",src:"http://odr4qggss.bkt.clouddn.com/2.png",h3:'作品二',span:'2016.09.23',key:'p2'},
              {id:"text3",src:"http://odr4qggss.bkt.clouddn.com/6.jpg",h3:'作品三',span:'2016.09.27',key:'p3'},
              {id:"text4",src:"http://odr4qggss.bkt.clouddn.com/7.jpg",h3:'作品四',span:'2016.09.29',key:'p4'},
            ]
      })
  }
  hand(i){
    switch (i){
      case 0:this.refs.text1.style.width="60%",this.refs.p1.innerHTML="Git是一个分布式的版本控制系统，最初由Linus Torvalds编写，用作Linux内核代码的管理。在推出后，Git在其它项目中也取得了很大成功，尤其是在Ruby社区中。目前，包括Rubinius和Merb在内的很多知名项目都使用了Git。Git同样可以被诸如Capistrano和Vlad the Deployer这样的部署工具所使用。同样，eoe.cn客户端的源码也托管在github上。";break;
      case 1:this.refs.text2.style.width="60%",this.refs.p2.innerHTML="仅仅是 UI 许多人使用 React 作为 MVC 架构的 V 层。 尽管 React 并没有假设过你的其余技术栈， 但它仍可以作为一个小特征轻易地在已有项目中使用虚拟 DOM React 为了更高超的性能而使用虚拟 DOM 作为其不同的实现。 它同时也可以由服务端 Node.js 渲染 － 而不需要过重的浏览器 DOM 支持数据流React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。";break;
      case 2:this.refs.text3.style.width="60%",this.refs.p3.innerHTML="一个简单的组件 React 组件通过一个render()方法，接受输入的参数并返回展示的对象。以下这个例子使用了 JSX，它类似于XML的语法 输入的参数通过render()传入组件后，将存储在this.props JSX 是可选的，并不强制要求使用。 可以看到 JSX 编译之后的 JavaScript 代码 Live JSX Editor";break;
      case 3:this.refs.text4.style.width="60%",this.refs.p4.innerHTML="一个有状态的组件除了接受输入数据（通过 this.props ），组件还可以保持内部状态数据（通过 this.state ）。当一个组件的状态数据的变化，展现的标记将被重新调用 render() 更新。";break;
    }
  }
  handout(i){
    switch (i){
      case 0:this.refs.text1.style.width="100%",this.refs.p1.innerHTML="";break;
      case 1:this.refs.text2.style.width="100%",this.refs.p2.innerHTML="";break;
      case 2:this.refs.text3.style.width="100%",this.refs.p3.innerHTML="";break;
      case 3:this.refs.text4.style.width="100%",this.refs.p4.innerHTML="";break;
    }
  }
  render () {
    let list=this.state.data.map((item,i)=>(<div key={i} className="work-card" onMouseOver={this.hand.bind(this,i)} onMouseOut={this.handout.bind(this,i)}>
        <a href="#"><img ref={item.id} src={item.src} />
          <p ref={item.key}></p>
        </a>
        <div className="work-text">
          <h3>{item.h3}</h3>
          <span>{item.span}</span>
        </div>
      </div>))
    return(
      <div className="work-container">
        {list}
      </div>
    )
  }
}

export default Work;
