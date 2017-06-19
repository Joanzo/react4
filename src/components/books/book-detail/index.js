import React, {Component} from 'react';

import {connect} from 'react-redux';

class BookDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.activeBook) {
            return (
                <div>
                    Choose your book...
                </div>
            )
        }
        
        return(
            <div>
                <h1>{this.props.activeBook.title}</h1>
                <p>Pages: {this.props.activeBook.pages}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeBook: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);