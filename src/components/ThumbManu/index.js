import React from "react";
import AvatarManu from "../AvatarManu";
import { Background, Avatar, Thumb, WrapperThumb, Channel } from "./styles";

function ThumbManu({ src, alt, avatar, channelName, time }) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarManu photo={avatar} channelName={channelName}></AvatarManu>
      </WrapperThumb>
    </Background>
  );
}
export default ThumbManu;
