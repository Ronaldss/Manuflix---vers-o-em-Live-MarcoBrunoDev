import React from "react";
import { Background, Avatar, Thumb, WrapperThumb } from "./styles";

function ThumbManu({ src, alt, avatar, channelName, time }) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <Avatar src={avatar} alt={channelName} />
      </WrapperThumb>
    </Background>
  );
}
export default ThumbManu;
