import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <div onClick={() => onVideoSelect(video)} className="video-list-item list-group-item">
            <div className="video-list media">
                <div className="media-left d-flex mr-3">
                    <img className="media-object  img-responsive" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        <h6 className="mt-0 mb-3">
                            {video.snippet.title}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoListItem;