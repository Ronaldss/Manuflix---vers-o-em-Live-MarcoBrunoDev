import styled from "styled-components";
import ButtonManu from "../ButtonManu";
import LogoManu from "../LogoManu";

const HeaderManu = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
  background: var(--color-black-dark);
  border-bottom: 4px solid var(--color-primary-medium);

  @media (max-width: 800px) {
    justify-content: center;
    padding: 15px 16px;

    & > ${LogoManu} {
      height: 35px;
    }

    & > ${ButtonManu} {
      background-color: var(--color-primary-medium);
      border-radius: 0;
      border: 0;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100vw;
    }
  }
`;

export default HeaderManu;
