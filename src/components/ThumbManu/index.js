import React from "react";
import AvatarManu from "../AvatarManu";
import { Background, Avatar, Thumb, WrapperThumb, Title } from "./styles";

function ThumbManu({ src, alt, avatar, channelName, title }) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarManu photo={avatar} channelName={channelName}></AvatarManu>
        <Title>{title}</Title>
      </WrapperThumb>
    </Background>
  );
}
export default ThumbManu;
