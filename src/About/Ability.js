import React from 'react';
import echarts from 'echarts';

class Ability extends React.Component {
  componentDidMount(){
    // 基于准备好的dom，初始化echarts实例
let myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
      series : [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          data:[
              {value:200, name:'JavaScript'},
              {value:335, name:'HTML5'},
              {value:310, name:'CSS3'},
              {value:237, name:'JQuery'},
              {value:137, name:'ES5,ES6'},
              {value:100, name:'Express'},
              {value:235, name:'React'}
          ]

      }]
    })
    myChart.on('click', function (params) {
        // 控制台打印数据的名称
        document.getElementById('txt').innerHTML = params.name
    });
  }

  render () {
    let styles={
      root:{
        display:'flex',
        flexDirection: 'row'
      },
      text:{
        color:'#00f',
        fontSize:'2vw',
        lineHeight:'400px',
        marginLeft:'4vw'
      }
    }
    return(
      <div style={styles.root}>
        <div id="main" style={{width: '500px',height:'400px'}}>
        </div>
        <p id="txt" style={styles.text}>点饼状图技能</p>
      </div>
    )
  }
}

export default Ability;
