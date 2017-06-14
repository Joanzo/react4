import React from 'react';

const VideoDetail = ({video}) => {
    if( typeof video === 'undefined' ) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail">
            <div className="video-object mb-5">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
            </div>
            <div className="video-body">
                <h5>{video.snippet.title}</h5>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;