import React, {Component} from 'react';
import BookList from '../../components/books/book-list';

class BooksPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="blog-header">
                    <div className="container">
                        <br /><br /><br /><br /><br />
                        <h1 className="blog-title">Books Page</h1>
                        <p className="lead blog-description">Select Book on Change</p>
                        
                        <br /><br /><br />
                        
                    </div>
                </div>
                <div className="container mb-5">

                    <div className="row">

                        <div className="col-sm-4  blog-sidebar">
                            <div className="sidebar-module sidebar-module-inset">
                                {<BookList  />}
                            </div>
                        </div> {/* .blog-sidebar */}


                        <div className="col-sm-8 blog-main">

                            
                            <br/>
                            <br/>
                            <nav className="blog-pagination">
                                <a className="btn btn-outline-primary" href="#">Older</a>
                                <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
                            </nav>

                        </div> {/* Blog Main */}



                    </div> {/* .row  */}

                </div> {/* .container */}
            </div>
        )
    }
}

export default BooksPage;