import styled from 'styled-components';

const ButtonManu = styled.button`
  padding: 12rem 30rem;
  background: var(--color-black-dark);
  color: var(--color-gray-light);
  border: 1px solid var(--color-gray-light);
  border-radius: 4px;
  font-size: 16rem;
  cursor: pointer;
  text-decoration: none; 
  transition: background-color 200ms linear,
    transform 200ms cubic-bezier(0, 0, 0.73, 2.24);

  &:hover{
    background-color: var(--color-pixelart);
    transform: scale(1.1);
  }
  &:active{
    transition: background-color 200ms linear, transform 100ms linear;
    transform: scale(0.95);
  }
`;

export default ButtonManu;
