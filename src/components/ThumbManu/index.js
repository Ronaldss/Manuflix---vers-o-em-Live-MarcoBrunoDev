import React from "react";
import { Avatar, Thumb, WrapperThumb } from "./styles";

function ThumbManu({ src, alt, avatar, channelName, time }) {
  return (
    <WrapperThumb>
      <Thumb src={src} alt={alt} />
      <Avatar src={avatar} alt={channelName} />
    </WrapperThumb>
  );
}
export default ThumbManu;
