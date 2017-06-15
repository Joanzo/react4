import React, {Component} from 'react';
import SearchBar from '../../components/search-bar';
import VideoDetail from '../../components/videos/video-detail';
import VideoList from '../../components/videos/video-list';

import _ from 'lodash';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBuJuequBQUmhZrwGN4Y07v7ZHCD6ho94g';

class VideoDetailPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        console.log('videoSearch: ', term);
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 1000);

        if (this.state.videos.length < 1) {
            return (
                <div>
                    Loading...
                </div>
            )
        } else {
            return (
                <div>
                    <div className="blog-header">
                        <div className="container">
                            <br /><br /><br /><br /><br />
                            <h1 className="blog-title">Youtube Search</h1>
                            <p className="lead blog-description">Search youtube on the search box</p>
                            <SearchBar onSearchTermChange={ (term) => videoSearch(term) } />
                            <br /><br /><br />
                            
                        </div>
                    </div>
                    <div className="container mb-5">

                        <div className="row">

                            <div className="col-sm-8 blog-main">

                                {<VideoDetail video={this.state.selectedVideo} />}
                                <br/>
                                <br/>
                                <nav className="blog-pagination">
                                    <a className="btn btn-outline-primary" href="#">Older</a>
                                    <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
                                </nav>

                            </div> {/* Blog Main */}

                            <div className="col-sm-4  blog-sidebar">
                                <div className="sidebar-module sidebar-module-inset">
                                    <h4>About</h4>
                                    <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                                </div>
                                <div className="sidebar-module sidebar-module-inset">
                                    {<VideoList videos={ this.state.videos }  onVideoSelect={ (selectedVideo) => this.setState({selectedVideo}) } />}
                                </div>
                            </div> {/* .blog-sidebar */}

                        </div> {/* .row  */}

                    </div> {/* .container */}
                </div>
            )
        }
    }

}

export default VideoDetailPage;