import React from 'react';
import VideoListItem from '../video-list-item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem video={video} />
    });

    return (
    <div>
        <div className="blog-header">
            <div className="container">
                <br /><br /><br /><br /><br />
                <h1 className="blog-title">Youtube Search</h1>
                <p className="lead blog-description">Search youtube from {props.videos.length} on the search box</p>
                <br /><br /><br />
            </div>
        </div>
        <div className="container">

            <div className="row">

                <div className="col-sm-8 blog-main">

                    {videoItems}

                    <br/>
                    <br/>
                    <nav className="blog-pagination">
                        <a className="btn btn-outline-primary" href="#">Older</a>
                        <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
                    </nav>

                </div> {/* Blog Main */}

                <div className="col-sm-3 offset-sm-1 blog-sidebar">
                <div className="sidebar-module sidebar-module-inset">
                    <h4>About</h4>
                    <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                </div>
                </div> {/* .blog-sidebar */}

            </div> {/* .row  */}

        </div> {/* .container */}
    </div>
    );


}

export default VideoList;