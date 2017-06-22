import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class BlogListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="video-list-item list-group-item">
                <div className="video-list media">
                    <div className="media-left d-flex mr-3">
                        
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                            <h6 className="mt-0 mb-3">
                                {this.props.blogItem.title}
                            </h6>
                        </div>
                    </div>
                </div>
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