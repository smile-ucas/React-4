/**
 * Created by xiaoxiao on 2017/3/17.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/BodyIndex';
class Index extends React.Component {


    render() {
        var head= < ComponentHeader / >;
        return (
            < div >
               {head}
               < BodyIndex userid={12345} username={'name_index'}/ >

               < ComponentFooter / >
            < / div >
        );
    }
}

ReactDOM.render( < Index / >, document.getElementById('example'));