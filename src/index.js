import './assets';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';


import TopNavigation from './components/navigations/top-navigation';
import VideoslPage from './pages/videos-page';
import BooksPage from './pages/books-page';
import WeatherPage from './pages/weather-page';

import Reducers from './reducer';

// import Reducers from './pages/books-page/reducer';

const store = createStore(Reducers, devToolsEnhancer());
//const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <TopNavigation  />
                {/*<VideosPage /> */}
                {/*<BooksPage /> */}
                <WeatherPage />

            </div>
        )
    }

}
// store={createStoreWithMiddleware(Reducers)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.querySelector('#app')
);