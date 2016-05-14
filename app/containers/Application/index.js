/**
 * Created by daniel on 16/5/12.
 */

import React from 'react';
import UserAction from '../../actions/UserAction';
import UserStore from '../../store/UserStore'

class Application extends React.Component {

    componentWillMount() {

    }

    componentDidMount() {
        console.log('did mount');
        UserAction.login({name:'name'});
    }

    _onclick(e) {
        console.log('=> onclick');
        UserAction.login({name:'d', password:'111'});
    }

    render() {
        return (<button onClick={this._onclick}>hahahahah</button>);

    }

}


export default Application;