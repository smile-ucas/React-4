/**
 * Created by xiaoxiao on 2017/3/17.
 */
/**
 * Created by xiaoxiao on 2017/3/17.
 */
/**
 * Created by xiaoxiao on 2017/3/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodychild';

import ReactMixin from 'react-mixin';
import MixinLog from './mixins';

const defaultProps={
    username:'这是一个默认的用户名'
}


export default class BodyIndex extends React.Component{
   constructor(){
       super();//调用基类的所有的初始化方法
       this.state={userName:"xiaoxiao",age:20};//初始化赋值
       //这个state只在当前类这里有作用,不会在其他组件中进行污染
   }
    changeUserInfo(age)
    {
        this.setState({age: age});
        //第一种方式
        // var mySubmitButton=document.getElementById('submitButton');
        // ReactDOM.findDOMNode(mySubmitButton).style.color='red';

        //第二种方式 定义ref  这个实在实践中用refs的，不要再render或render前调用refs，因为整个结构还没有生成好
        console.log(this.refs.submitButton);//就是这个input节点
        this.refs.submitButton.style.color='red';

        MixinLog.log();

    };
    handleChildValueChange(event){
       this.setState({age:event.target.value});
    };
    render(){
       // setTimeout(()=>{
       //     //更改state的时候
       //     this.setState({userName:"smile",age:30});
       // },2000);//该页的

        return(
            <div>
               <h2>这里是主体</h2>
               <p>userid:{this.props.userid} username:{this.props.username}</p>
               <p>age:{this.state.age}</p>

               <input id="submitButton" ref="submitButton" type="button" value="submit" onClick={this.changeUserInfo.bind(this,999)}/>
               <BodyChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
               {/*BodyChild从父页面BodyIndex的父页面index中拿了所有属性，就是向孙子快速的传参，还加了一个属性id*/}
            </div>

    );
    }
}


BodyIndex.propTypes = {
    // uerid:React.ropTypes.number//限制父页面index传过来的userid类的类型，需number型
    userid:React.PropTypes.number.isRequired//必须传。在此页前后加 可设默认值，如父页面传过来的username，传过来的能覆盖默认的
}

BodyIndex.defaultProps=defaultProps;


ReactMixin(BodyIndex.prototype,MixinLog);