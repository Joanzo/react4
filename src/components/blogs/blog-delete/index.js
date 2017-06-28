import React, {Component} from 'react';

import {connect} from 'react-redux';

import {Link, withRouter} from 'react-router-dom';

import {deleteBlog} from './action';


class BlogDelete extends Component {
    constructor(props) {
        super(props);
    }   
    onSubmit(e) {
        e.preventDefault();
        const { id } = this.props.match.params;
        this.props.deleteBlog(id, () => {
            this.props.history.push('/blogs');
        });
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <button type="submit" className="btn btn-danger">Delete Blog</button>
            </form>
        )
    }
}
function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of BlogList
    return {
        blogs: state.blogs,
    };
}

export default withRouter(connect(mapStateToProps,{deleteBlog}) (BlogDelete));