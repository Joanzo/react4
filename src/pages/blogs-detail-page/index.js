import React, {Component} from 'react';
import BlogDetail from '../../components/blogs/blog-detail';
import BlogDelete from '../../components/blogs/blog-delete';


class BlogsPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="blog-header">
                    <div className="container">
                        <br /><br /><br /><br /><br />
                        <h1 className="blog-title">Blogs Page</h1>
                        <p className="lead blog-description">Blog Detail Page</p>
                        
                        <br /><br /><br />
                        
                    </div>
                </div>
                <div className="container mb-5">

                    <div className="row">

                        <div className="col-sm-8  blog-main">
                            <BlogDetail />
                        </div> {/* .blog-sidebar */}


                        <div className="col-sm-4 blog-sidebar">
                            <BlogDelete />
                        </div> {/* Blog Main */}



                    </div> {/* .row  */}

                </div> {/* .container */}

            </div>

        )
    }
}

export default BlogsPage;