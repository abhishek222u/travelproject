import React from 'react';
import './InstagramReelsGrid.css';

const reels = [
    {
        url: 'https://www.instagram.com/reel/DMOQu0ZRwWC/',
        embed: 'https://www.instagram.com/reel/DMOQu0ZRwWC/embed',
    },
    {
        url: 'https://www.instagram.com/reel/DMOUBizpaa6/',
        embed: 'https://www.instagram.com/reel/DMOUBizpaa6/embed',
    },
    {
        url: 'https://www.instagram.com/reel/DMOWvoBxgb8/',
        embed: 'https://www.instagram.com/reel/DMOWvoBxgb8/embed',
    },
    {
        url: 'https://www.instagram.com/reel/DMX7dq-srqj/',
        embed: 'https://www.instagram.com/reel/DMX7dq-srqj/embed',
    },
];

const InstagramReels = () => {
    return (
        <div className="reels-container">
            {reels.map((reel, index) => (
                <div className="reel" key={index}>
                    <iframe
                        src={reel.embed}
                        width="300"
                        height="500"
                        frameBorder="0"
                        scrolling="no"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                        allowFullScreen
                        title={`Instagram Reel ${index}`}
                        style={{
                            border: 'none',
                            borderRadius: '12px',
                            overflow: 'hidden',
                        }}
                    ></iframe>
                </div>
            ))}
        </div>
    );
};

export default InstagramReels;
