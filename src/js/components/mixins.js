/**
 * Created by xiaoxiao on 2017/3/18.
 */
const MixinLog = {
   //它也可以有生命周期
    componentWillMount(){
        console.log('mixin_componentWillMount');
    },


    log(){
        console.log('mixins_example_co');
    }
};

export default MixinLog