import React from 'react';
import LogoImersao from '../LogoImersao';
import LogoManu from '../LogoManu';
import FooterStyle from './styles';
import LinkManu from '../LinkManu';

function FooterOpen() {
  return (
    <FooterStyle>
      <LogoManu />
      <p>
        Site feito na imersão React da
        <LinkManu href="https://alura.com.br"> Alura.</LinkManu>
        <a href="https://github.com/Ronaldss/Manuflix---vers-o-em-Live-MarcoBrunoDev">
          <LogoImersao />
        </a>
      </p>
    </FooterStyle>
  );
}

export default FooterOpen;
