import React from "react";
import LogoManu from "./components/LogoManu/index.js";
import { HeaderManu, Wrapper } from "./components/HeaderManu";
import ButtonManu from "./components/ButtonManu/";
import FooterMana from "./components/FooterManu";
import LinkManu from "./components/LinkManu";
import HighlightManu from "./components/HighlightManu";
import LogoImersao from "./components/LogoImersao/";
import TagManu from "./components/TagManu";
import { BannerManu, Text } from "./components/BannerManu";
import TitleManu from "./components/TitleManu/";
import DescriptionManu from "./components/DescriptionManu/index.js";
import ThumbManu from "./components/ThumbManu/index.js";
import dev from "./assests/img/dev.png";
import avatarImg from "./assests/img/avatar.jpg";

function App() {
  return (
    <>
      <HeaderManu>
        <Wrapper>
          <LogoManu />
          <ButtonManu>Novo Vídeo</ButtonManu>
        </Wrapper>
      </HeaderManu>
      <BannerManu>
        <Text>
          <TagManu>Front End</TagManu>
          <TitleManu>Title do vídeo</TitleManu>
          <DescriptionManu>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria.
          </DescriptionManu>
        </Text>

        <ThumbManu
          src={dev}
          alt="Thumb da minha tela"
          avatar={avatarImg}
          channelName="Nome do canal"
          time="00:02:00"
        />
      </BannerManu>
      <FooterMana>
        <LogoManu />
        <p>
          Site feito na <HighlightManu>#ImersãoReact</HighlightManu> da{" "}
          <LinkManu href="https://alura.com.br">Alura.</LinkManu>
          <a href="https://github.com/Ronaldss/Manuflix---vers-o-em-Live-MarcoBrunoDev">
            <LogoImersao />
          </a>
        </p>
      </FooterMana>
    </>
  );
}

export default App;
