import { combineReducers } from 'redux';
import BooksReducer from '../../components/books/book-list/reducer';

const rootReducer = combineReducers ({
    books: BooksReducer
});

export default rootReducer;