import React from "react";
import { Avatar, Channel, WrapperAvatar } from "./styles";

function AvatarManu({ photo, channelName }) {
  return (
    <WrapperAvatar>
      <Avatar src={photo} alt={channelName} />
      <Channel>{channelName}</Channel>
    </WrapperAvatar>
  );
}

export default AvatarManu;
