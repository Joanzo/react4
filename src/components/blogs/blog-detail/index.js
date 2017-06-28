import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBlog} from './action';
import {withRouter} from 'react-router-dom';

class BlogDetail extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.fetchBlog(id);
    }
    render() {
        console.log(this.props);
        if (this.props.blog) {
            return (
                <div className="blog-detail-container">
                    <h1>{this.props.blog.title}</h1>
                    <div>Category: {this.props.blog.categories}</div>
                    <div className="blog-description">
                        {this.props.blog.content}
                    </div>
                </div>
            )
        }
        return (
            <div>
                Loading...
            </div>
        )
    }
}

function mapStateToProps({blog}, ownProps) {
    return {blog: blog[ownProps.match.params.id]}
}

/*
// Anything returned by this function ends up as props in BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}
*/

export default withRouter(connect(mapStateToProps, {fetchBlog})(BlogDetail));