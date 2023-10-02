import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Channel, WrapperAvatar } from './styles';

function AvatarManu({ photo, channelName }) {
  return (
    <WrapperAvatar>
      <Avatar src={photo} alt={channelName} />
      <Channel>{channelName}</Channel>
    </WrapperAvatar>
  );
}

AvatarManu.propTypes = {
  photo: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
};

export default AvatarManu;
