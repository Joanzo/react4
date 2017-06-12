import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import TopNavigation from './components/navigations/top-navigation';
import VideoList from './components/videos/video-list';


const API_KEY = 'AIzaSyBuJuequBQUmhZrwGN4Y07v7ZHCD6ho94g';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: "surfboards"}, (videos) => {
            this.setState({ videos });
            console.log(videos);
        });
    }

    render() {
        return (
            <div>
                <TopNavigation />
                <VideoList videos={this.state.videos} test='asem' />
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#app')
);