import React from 'react';
import { HeaderManu, Wrapper } from './styles';
import LogoManu from '../LogoManu';
import ButtonManu from '../ButtonManu';

function HeaderOpen() {
  return (
    <HeaderManu>
      <Wrapper>
        <LogoManu />
        <ButtonManu as="a" href="/pages/video/">
          Entrar
        </ButtonManu>
      </Wrapper>
    </HeaderManu>
  );
}

export default HeaderOpen();
