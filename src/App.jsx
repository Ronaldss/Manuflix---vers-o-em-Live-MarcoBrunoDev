import React from 'react';
import TagManu from './components/TagManu';
import { BannerManu, Text } from './components/BannerManu';
import TitleManu from './components/TitleManu';
import DescriptionManu from './components/DescriptionManu/index';
import ThumbManu from './components/ThumbManu';
import dev from './assests/img/dev.png';
import avatarImg from './assests/img/avatar.jpg';
import HeaderOpen from './components/HeaderOpen';
import FooterOpen from './components/FooterOpen';

function App() {
  return (
    <>
      <HeaderOpen />
      <BannerManu>
        <Text>
          <TagManu>Tudo de História</TagManu>
          <TitleManu>Bem vindo ao meu canal</TitleManu>
          <DescriptionManu>
            Os antigos hebreus foram um povo semítico da região do Levante,
            localizado no Oriente Médio. O etnônimo foi utilizado a
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
      <FooterOpen />
    </>
  );
}

export default App;
