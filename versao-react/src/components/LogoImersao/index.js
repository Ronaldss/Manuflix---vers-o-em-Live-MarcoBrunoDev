import styled from 'styled-components';
import logo from '../../assests/img/logo-imersao.svg';

const LogoImersao = styled.img.attrs({
  src: logo,
  alt: 'Logo da imersão React da Alura',
})`
  height: 50px;
  vertical-align: middle;
`;

export default LogoImersao;
