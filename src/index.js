import './assets';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import devToolsEnhancer from 'remote-redux-devtools';

import TopNavigation from './components/navigations/top-navigation';
import VideosPage from './pages/videos-page';
import BooksPage from './pages/books-page';
import WeatherPage from './pages/weather-page';
import BlogsPage from './pages/blogs-page';

import Reducers from './reducer';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <BrowserRouter>
                <div>
                    <TopNavigation  />
                    <Route path="/videos" component={VideosPage} />
                    <Route path="/books" component={BooksPage} />
                    <Route path="/weather" component={WeatherPage} />
                    <Route exact path="/" component={BlogsPage} />
                </div>
            </BrowserRouter>
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