import React, {component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';


const youtubeAPI = 'AIzaSyBuJuequBQUmhZrwGN4Y07v7ZHCD6ho94g';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.querySelector('#app')
);