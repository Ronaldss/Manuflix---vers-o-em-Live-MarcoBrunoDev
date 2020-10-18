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
