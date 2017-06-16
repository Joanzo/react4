import './assets';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


import TopNavigation from './components/navigations/top-navigation';
import VideoslPage from './pages/videos-page';
import BooksPage from './pages/books-page';




import Reducers from './pages/books-page/reducer';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <TopNavigation  />
                <BooksPage />
                {/*<VideosPage /> */}

            </div>
        )
    }

}
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(Reducers)}>
        <App />
    </Provider>
    ,
    document.querySelector('#app')
);