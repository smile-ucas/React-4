/**
 * Created by xiaoxiao on 2017/3/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';


export default class ComponentHeader extends React.Component{
    constructor(){
        super();
        this.state={
            miniHeader:false //默认加载的时候还是高的头，不是mini的头部，初始化
        };
    };
    switchHeader(){
        this.setState({
            miniHeader:!this.state.miniHeader
        });
    };

    render(){
        const styleComponentHeader={
            header:{
                backgroundColor:"#333333",
                color:"#FFFFFF",
                "padding-top":(this.state.miniHeader)?"3px":"15px",//命名不同于原生CSS，加引号或驼峰式
                paddingBottom:(this.state.miniHeader)?"3px":"15px"//命名不同于原生CSS，加引号或驼峰式
            }
            //接着还可以定义其他的样式

        };


        return(
            <header style={styleComponentHeader.header} class="smallFontSize"
                onClick={this.switchHeader.bind(this)}>{/*这里css用className，因为React的类用了class，如果非要把css也写成class，也可以，因为现在安了插件babel-plugin-react-html-attrs*/}
                 <h1>这里是头部</h1>

            </header>

         )
    }


}