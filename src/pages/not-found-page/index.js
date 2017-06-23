import React, {Component} from 'react';


class NotFoundPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="blog-header">
                    <div className="container">
                        <br /><br /><br /><br /><br />
                        <h1 className="blog-title">Not Found</h1>
                        <p className="lead blog-description">Sorry the page is unavailable</p>
                        <br /><br /><br />
                        
                    </div>
                </div>
            </div>
        )
    }

}

export default NotFoundPage;