import React from "react";
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
export default ThumbManu;
