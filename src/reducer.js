import { combineReducers } from 'redux';
import books from './components/books/book-list/reducer';
import activeBook from './components/books/book-list-item/reducer';
import weather from './components/weather/weather-search-bar/reducer';
import blogData from './components/blogs/blog-list/reducer';


const Reducers = combineReducers ({
    books,
    activeBook,
    weather,
    blogData
});

export default Reducers;