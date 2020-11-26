import React from 'react';
import PropTypes from 'prop-types';
import ThumbManu from '../ThumbManu';

function CarouselManu({videos}) {
    const {src, alt, title, avatar, channelName, time, link} = videos[0];
    return (
        <ThumbManu
            src={src}
            alt={alt}
            title={title}
            avatar={avatar}
            channelName={channelName}
            time={time}
            link={link}
        />
    ); 
}

const typeVideos = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    channelName: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

CarouselManu.propTypes = {
    videos: PropTypes.arrayOf.isRequired,
};

export  default CarouselManu; 