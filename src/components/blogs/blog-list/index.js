import React, { Component } from 'react';
import BlogListItem from '../blog-list-item';
import {fetchBlogs} from './action';

import {bindActionCreators} from 'redux';
import _ from 'lodash';

import { connect } from 'react-redux';

import {store} from '../../../store';

class BlogList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchBlogs();
        console.log('STORES: ', store.getState());

    }

    renderList() {
        if (_.isEmpty(this.props.blogs)) {
            return 'Loading...';
        }

        return _.map(this.props.blogs, blogItem => {
            return (
                <BlogListItem key={blogItem.id} blogItem={blogItem} />
            )
        })


    }
    render() {
        return (
            <div className="blog-list-container list-group">
                {this.renderList()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of BlogList
    return {
        blogs: state.blogs,
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchBlogs }, dispatch);
}
// Promote BlogList from a component to a container, 
// it needs to know this new method: selectBook. Make it available as props
export default connect(mapStateToProps, { fetchBlogs })(BlogList);