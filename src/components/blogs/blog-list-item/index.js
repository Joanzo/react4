import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class BlogListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const blogItemURL = `/blogs/${this.props.blogItem.id}`;
        return (
            <div className="video-list-item list-group-item">
                <Link className="d-block w-100" to={blogItemURL}>
                    <div className="video-list media">
                        <div className="media-body">
                            <div className="media-heading">
                                <h6 className="mb-0">
                                    {this.props.blogItem.title}
                                </h6>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

/*
// Anything returned by this function ends up as props in BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}
*/

//export default VideoListItem;
export default BlogListItem;