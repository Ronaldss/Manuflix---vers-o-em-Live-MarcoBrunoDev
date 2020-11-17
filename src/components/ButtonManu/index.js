import styled from 'styled-components';

const ButtonManu = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  position: relative;
  padding: 12rem 30rem;
  background: var(--color-black-dark);
  color: var(--color-gray-light);
  border: 1px solid var(--color-gray-light);
  border-radius: 4px;
  font-size: 22rem;
  cursor: pointer;
  text-decoration: none; 
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    opacity: 1;
    width: 100%;
    height:100%;
    background-color: var(--color-pixelart);
    transform-origin: bottom left;
    transform: translateX(100%) scale(1.5) skew(-30deg);
    transition: transform 200ms linear;
  }

  &::after{
    content: "${(props) => props.children}";
    position: absolute;
  }
  
  &:hover::before{
    transform: translateX(-40%) scale(1.5) skew(-30deg);
  }
`;

export default ButtonManu;
