import { combineReducers } from 'redux';
import books from './components/books/book-list/reducer';
import activeBook from './components/books/book-list-item/reducer';


const rootReducer = combineReducers ({
    books,
    activeBook
});

export default rootReducer;