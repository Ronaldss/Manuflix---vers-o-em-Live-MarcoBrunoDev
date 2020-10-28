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
          <TagManu>Tudo de História</TagManu>
          <TitleManu>Os Hebreus e o monoteismo judáico</TitleManu>
          <DescriptionManu>
            Os antigos hebreus foram um povo semítico da região do Levante,
            localizado no Oriente Médio. O etnônimo também foi utilizado a
            partir do período romano para se referir aos judeus, um grupo étnico
            e religioso de ascendência hebraica.
          </DescriptionManu>
        </Text>

        <ThumbManu
          src={dev}
          alt="Thumb da minha tela"
          avatar={avatarImg}
          channelName="Tudo de História"
          title="Os Hebreus e o monoteismo judáico"
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
