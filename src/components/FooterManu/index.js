import styled from 'styled-components';
import LogoManu from '../LogoManu';

const FooterManu = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  background-color: var(--color-black-dark);
  color: var(--color-gray-light);
  padding: 20rem 0;
  border-top: 4px solid var(--color-gray-light);

  & > ${LogoManu} {
    margin-bottom: 20rem;
  }
`;

export default FooterManu;
