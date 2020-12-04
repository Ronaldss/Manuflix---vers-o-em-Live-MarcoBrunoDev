import React from 'react';
import PropTypes from 'prop-types';
import ThumbManu from '../ThumbManu';

function CarouselManu({ videos }) {
  return (
    <div>
      { videos.map(({
        src, alt, title, avatar, channelName, time, link,
      }) => (
        <ThumbManu
          src={src}
          alt={alt}
          title={title}
          avatar={avatar}
          channelName={channelName}
          time={time}
          link={link}
        />
      ))}
    </div>
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
console.log(typeVideos);
CarouselManu.propTypes = {
  videos: PropTypes.arrayOf.isRequired,
};

export default CarouselManu;
