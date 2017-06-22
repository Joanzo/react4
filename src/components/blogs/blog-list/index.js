import React, { Component } from 'react';
import BlogListItem from '../blog-list-item';
import {fetchBlogs} from './action';

import {bindActionCreators} from 'redux';
import _ from 'lodash';

import { connect } from 'react-redux';

//import { bindActionCreators } from 'redux';

class BlogList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchBlogs();
    }

    renderList() {
        if (_.isEmpty(this.props.blogData)) {
            return 'Loading...';
        }

        return _.map(this.props.blogData, blogItem => {
            return (
                <BlogListItem key={blogItem.id} blogItem={blogItem} />
            )
        })


    }
    render() {
        return (
            <div className="book-list-container list-group">
                {this.renderList()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('state: ', state);
    // Whatever is returned will show up as props inside of BlogList
    return {
        blogData: state.blogData,
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchBlogs }, dispatch);
}
// Promote BlogList from a component to a container, 
// it needs to know this new method: selectBook. Make it available as props
export default connect(mapStateToProps, { fetchBlogs })(BlogList);