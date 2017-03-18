/**
 * Created by xiaoxiao on 2017/3/17.
 */
import React from 'React';

export default class BodyChild extends React.Component{
    render(){
        return (
            <div>
                <p>子页面输入:<input type="text" onChange={this.props.handleChildValueChange}/></p>
                {/*子页面向父页面传值，只能通过父页面给的props来控制函数来进行*/}
                 <p>{this.props.userid} {this.props.username} {this.props.id}</p>
            </div>
        )
    }
}