import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

import books from './components/books/book-list/reducer';
import activeBook from './components/books/book-list-item/reducer';
import weather from './components/weather/weather-search-bar/reducer';
import blogs from './components/blogs/blog-list/reducer';
import blog from './components/blogs/blog-detail/reducer';
import deleteBlog from './components/blogs/blog-delete/reducer';


const Reducers = combineReducers ({
    books,
    activeBook,
    weather,
    blogs,
    blog,
    deleteBlog,
    form
});

export default Reducers;