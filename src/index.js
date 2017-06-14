import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import TopNavigation from './components/navigations/top-navigation';
import VideoDetailPage from './pages/video-detail-page';


const API_KEY = 'AIzaSyBuJuequBQUmhZrwGN4Y07v7ZHCD6ho94g';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        console.log(term);
        YTSearch({key: API_KEY, term: "surfboards"}, (videos) => {
            this.setState({ 
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <TopNavigation onSearchTermChange={ (term) => this.videoSearch(term) } />
                <VideoDetailPage 
                    videos = { this.state.videos } 
                    selectedVideo = { this.state.selectedVideo } 
                    onVideoSelect = { (selectedVideo) => this.setState({selectedVideo}) }
                />

            </div>
        )
    }
    // <VideoList videos={this.state.videos} />
}
ReactDOM.render(
    <App />,
    document.querySelector('#app')
);