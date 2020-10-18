import styled from "styled-components";
import container from "../../tools/container";
import ButtonManu from "../ButtonManu";
import LogoManu from "../LogoManu";

export const HeaderManu = styled.header`
  padding: 20rem 0;

  background: var(--color-black-dark);
  border-bottom: 4px solid var(--color-primary-medium);

  @media (max-width: 800px) {
    padding: 15rem 16rem;
  }
`;
export const Wrapper = styled.div`
  ${container};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;

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
