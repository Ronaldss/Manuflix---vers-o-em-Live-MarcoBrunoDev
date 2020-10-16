import React from "react";
import LogoManu from "./components/LogoManu/index.js";
import HeaderManu from "./components/HeaderManu";
import ButtonManu from "./components/ButtonManu/";
import FooterMana from "./components/FooterManu";
import LinkManu from "./components/LinkManu";
import HighlightManu from "./components/HighlightManu";

function App() {
  return (
    <>
      <HeaderManu>
        <LogoManu />
        <ButtonManu>Novo Vídeo</ButtonManu>
      </HeaderManu>
      <FooterMana>
        <LogoManu />
        <p>
          Site feito na <HighlightManu>#ImersãoReact</HighlightManu> da{" "}
          <LinkManu href="https://alura.com.br">Alura.</LinkManu>
        </p>
      </FooterMana>
    </>
  );
}

export default App;
