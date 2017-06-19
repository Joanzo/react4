import React, {Component} from 'react';
import SearchBar from '../../components/weather-search-bar';


class WeatherPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null
        };

    }

    render() {
        return (
            <div>
                <div className="blog-header">
                    <div className="container">
                        <br /><br /><br /><br /><br />
                        <h1 className="blog-title">Weather Search</h1>
                        <p className="lead blog-description">Search weather on the search box</p>
                        <SearchBar  />
                        <br /><br /><br />
                        
                    </div>
                </div>
                <div className="container mb-5">

                    <div className="row">

                        <div className="col-sm-8 blog-main">

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

                        </div> {/* .blog-sidebar */}

                    </div> {/* .row  */}

                </div> {/* .container */}
            </div>
        )
    }

}

export default WeatherPage;