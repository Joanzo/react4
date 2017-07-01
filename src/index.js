import './assets';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import devToolsEnhancer from 'remote-redux-devtools';

import Layout from './layouts';
import { store } from './store';


class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Layout />  
        )
    }

}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.querySelector('#app')
);