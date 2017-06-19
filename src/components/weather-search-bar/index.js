import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
    }
    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input className="form-control" type="text" placeholder="Get a five-day forecast in your favorite cities"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        submit
                    </button>
                </span>
            </form>
        )
    }
}

export default SearchBar;