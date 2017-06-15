import './assets';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import TopNavigation from './components/navigations/top-navigation';
import VideoDetailPage from './pages/video-detail-page';
import BooksPage from './pages/books-page';



class App extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <TopNavigation  />
                <BooksPage />
                {/*<VideoDetailPage /> */}

            </div>
        )
    }

}
ReactDOM.render(
    <App />,
    document.querySelector('#app')
);