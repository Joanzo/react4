import React from 'react';

const VideoListItem = ({book, selectBook}) => {
    return (
        <div className="video-list-item list-group-item" onClick={() => selectBook(book)}>
            <div className="video-list media">
                <div className="media-left d-flex mr-3">
                    
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        <h6 className="mt-0 mb-3">
                            {book.title}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoListItem;