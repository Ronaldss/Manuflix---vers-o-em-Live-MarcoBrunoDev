import { checkPropTypes } from "prop-types";
import React from "react";
import PropTypes from "prop-types";
import AvatarManu from "../AvatarManu";
import { Background, Avatar, Thumb, WrapperThumb, Title, Time } from "./styles";

function ThumbManu({ src, alt, avatar, channelName, title, time }) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarManu photo={avatar} channelName={channelName}></AvatarManu>
        <Title>{title}</Title>
        <Time>{time}</Time>
      </WrapperThumb>
    </Background>
  );
}

ThumbManu.prototype = {
  src: PropTypes.string.isRequired,
};

export default ThumbManu;
