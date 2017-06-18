import React, { Component } from 'react';
import BookListItem from '../book-list-item';

import { connect } from 'react-redux';
import { selectBook } from './action';

import { bindActionCreators } from 'redux';

class BookList extends Component {
    constructor(props) {
        super(props);
    }
    renderList() {
        return this.props.books.map((book) => {
            return (
                <BookListItem key={book.title} book={book} selectBook={this.props.selectBook}/>
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
    // Whatever is returned will show up as props inside of Booklist
    return {
        books: state.books
    };
}

// Anything returned by this function ends up as props in BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container, 
// it needs to know this new method: selectBook. Make it available as props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);