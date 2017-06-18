import React, {Component} from 'react';
import BookList from '../../components/books/book-list';
import BookDetail from '../../components/books/book-detail';

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
                                {<BookDetail />}
                            
                            <br/>
                            <br/>


                        </div> {/* Blog Main */}



                    </div> {/* .row  */}

                </div> {/* .container */}
            </div>
        )
    }
}

export default BooksPage;