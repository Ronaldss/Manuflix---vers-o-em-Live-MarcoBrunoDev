import React from 'react';
import PropTypes from 'prop-types';
import AvatarManu from '../AvatarManu';
import {
  Background, Thumb, WrapperThumb, Title, Time,
} from './styles';

function ThumbManu({
  src, alt, avatar, channelName, title, time,
}) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarManu photo={avatar} channelName={channelName} />
        <Title>{title}</Title>
        <Time>{time}</Time>
      </WrapperThumb>
    </Background>
  );
}

// ThumbManu.defaultProps = {
//   src:'',
// };

ThumbManu.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,

};

export default ThumbManu;
