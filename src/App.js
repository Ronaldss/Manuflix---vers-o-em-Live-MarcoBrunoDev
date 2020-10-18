import React from "react";
import LogoManu from "./components/LogoManu/index.js";
import HeaderManu from "./components/HeaderManu";
import ButtonManu from "./components/ButtonManu/";
import FooterMana from "./components/FooterManu";
import LinkManu from "./components/LinkManu";
import HighlightManu from "./components/HighlightManu";
import LogoImersao from "./components/LogoImersao/";
import TagManu from "./components/TagManu";
import BannerManu from "./components/BannerManu";
import TitleManu from "./components/TitleManu/";
import DescriptionManu from "./components/DescriptionManu/index.js";

function App() {
  return (
    <>
      <HeaderManu>
        <LogoManu />
        <ButtonManu>Novo Vídeo</ButtonManu>
      </HeaderManu>
      <BannerManu>
        <TagManu>Front End</TagManu>
        <TitleManu>Title do vídeo</TitleManu>
        <DescriptionManu>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI.
        </DescriptionManu>
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
