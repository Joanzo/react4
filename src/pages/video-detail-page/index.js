import React from 'react';
import VideoDetail from '../../components/videos/video-detail';
import VideoList from '../../components/videos/video-list';

const VideoDetailPage = ({videos, selectedVideo, onVideoSelect}) => {
    if (videos.length < 1) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            <div className="blog-header">
                <div className="container">
                    <br /><br /><br /><br /><br />
                    <h1 className="blog-title">Youtube Search</h1>
                    <p className="lead blog-description">Search youtube on the search box</p>
                    <br /><br /><br />
                </div>
            </div>
            <div className="container mb-5">

                <div className="row">

                    <div className="col-sm-8 blog-main">

                        {<VideoDetail video={selectedVideo} />}
                        <br/>
                        <br/>
                        <nav className="blog-pagination">
                            <a className="btn btn-outline-primary" href="#">Older</a>
                            <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
                        </nav>

                    </div> {/* Blog Main */}

                    <div className="col-sm-4  blog-sidebar">
                        <div className="sidebar-module sidebar-module-inset">
                            <h4>About</h4>
                            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                        </div>
                        <div className="sidebar-module sidebar-module-inset">
                            {<VideoList videos={videos} onVideoSelect={onVideoSelect} />}
                        </div>
                    </div> {/* .blog-sidebar */}

                </div> {/* .row  */}

            </div> {/* .container */}
        </div>
    )
}

export default VideoDetailPage;