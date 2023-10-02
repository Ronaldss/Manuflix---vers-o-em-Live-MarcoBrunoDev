import styled from 'styled-components';
import LogoStyle from '../LogoManu/styles';

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  /* background-color: var(--color-black-dark); */
  background-color: #130211;
  color: var(--color-gray-light);
  padding: 20rem 0;
  border-top: 4px solid var(--color-gray-light);

  & > ${LogoStyle} {
    margin-bottom: 15rem;
  }
`;

export default FooterStyle;
