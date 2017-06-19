import React, { Component } from 'react';
import BookListItem from '../book-list-item';

import { connect } from 'react-redux';

//import { bindActionCreators } from 'redux';

class BookList extends Component {
    constructor(props) {
        super(props);
    }
    renderList() {
        return this.props.books.map((book) => {
            return (
                <BookListItem key={book.title} book={book}/>
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

// Promote BookList from a component to a container, 
// it needs to know this new method: selectBook. Make it available as props
export default connect(mapStateToProps)(BookList);