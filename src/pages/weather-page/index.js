import React, {Component} from 'react';
import SearchBar from '../../components/weather/weather-search-bar';
import WeatherList from '../../components/weather/weather-list';


class WeatherPage extends Component {
    constructor(props) {
        super(props);
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

                        <div className="col-sm-12 blog-main">
                            <WeatherList />
                        </div> {/* Blog Main */}



                    </div> {/* .row  */}

                </div> {/* .container */}
            </div>
        )
    }

}

export default WeatherPage;