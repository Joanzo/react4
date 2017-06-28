import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BlogDetail from '../../components/blogs/blog-detail';


class BlogsPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="blog-header">
                    <div className="container">
                        <br /><br /><br /><br /><br />
                        <h1 className="blog-title">Dashboard</h1>
                        <p className="lead blog-description">Choose app from list below</p>
                        
                        <br /><br /><br />
                        
                    </div>
                </div>
                <div className="container">
                    <section className="row text-center placeholders">
                        <div className="col-sm-6 col-md-3 mb-5">
                            <Link to="/videos">
                                <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle mb-3" alt="Generic placeholder thumbnail" />
                                <h4>Videos</h4>
                                <div className="text-muted">Plain react with youtube API</div>
                            </Link>
                        </div>
                        <div className="col-sm-6 col-md-3 mb-5">
                            <Link to="/books">
                                <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle mb-3" alt="Generic placeholder thumbnail" />
                                <h4>Books</h4>
                                <div className="text-muted">React with redux</div>
                            </Link>
                        </div>
                        <div className="col-sm-6 col-md-3 mb-5">
                            <Link to="/weather">
                                <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle mb-3" alt="Generic placeholder thumbnail" />
                                <h4>Weather</h4>
                                <div className="text-muted">Axios, Weather API with Sparkline Chart</div>
                            </Link>
                        </div>
                        <div className="col-sm-6 col-md-3 mb-5">
                            <Link to="/blogs">
                                <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle mb-3" alt="Generic placeholder thumbnail" />
                                <h4>Blogs</h4>
                                <div className="text-muted">With React Router Passing On URL</div>
                            </Link>
                        </div>
                    </section>
                </div>

            </div>

        )
    }
}

export default BlogsPage;