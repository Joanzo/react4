import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    render() {
        return (
            <div>
                <input className="form-control mr-sm-2" type="text" placeholder="Search"
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })}
                />
            </div>
        )
    }
}

export default SearchBar;