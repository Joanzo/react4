import React from 'react';
import VideoListItem from '../video-list-item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} onVideoSelect={props.onVideoSelect}/>
    });

    return (
        <div className="video-list-container">
            {videoItems}
        </div>
    );


}

export default VideoList;