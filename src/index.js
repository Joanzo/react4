import './assets';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import devToolsEnhancer from 'remote-redux-devtools';

import TopNavigation from './components/navigations/top-navigation';
import VideosPage from './pages/videos-page';
import BooksPage from './pages/books-page';
import WeatherPage from './pages/weather-page';
import BlogsPage from './pages/blogs-page';
import BlogsAddPage from './pages/blogs-add-page';
import NotFoundPage from './pages/not-found-page';

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
                        <Switch>
                            <Route path="/videos" component={VideosPage} />
                            <Route path="/books" component={BooksPage} />
                            <Route path="/weather" component={WeatherPage} />
                            <Route path="/blogs/add" component={BlogsAddPage}  />
                            <Route exact path="/blogs" component={BlogsPage} />
                            <Route exact path="/" component={BlogsPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
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