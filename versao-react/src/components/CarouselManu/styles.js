import styled from 'styled-components';
import { Background, WrapperThumb } from '../ThumbManu/styles';
import arrow from '../../assests/img/arrow.svg';

export const Right = styled.button`
  position: absolute;
  height:calc(100% - var(--space-top-bottom) * 2);
  width: 50rem;
  background-color: var(--color-pixelart);
  right: 0; 
  opacity: 0;
  border:none;
  transition: opacity 200ms linear, transform 200ms linear;
  cursor: pointer;

  &::after {
    content: url(${arrow});
    display: inline-block;
    opacity: 1;
    transform: rotate(-90deg);
    transition: transform 50ms linear;
  }

  &:hover::after {
    transform: scale(1.2) rotate(-90deg);
  }

  &:active::after {
    transform: rotate(-90deg) translateY(4rem);
  }
`;

export const CarouselStyle = styled.div`
  --space-top-bottom: 20rem;
  position: relative;
  display:flex;
  align-items: center;
  align-self: flex-start;
  box-sizing: border-box;
  width: 100%;
  padding: var(--space-top-bottom) 30rem;
  overflow: hidden;

  & > ${Background} {
    margin-right: 20rem;
  }

  & ${WrapperThumb} {
    width: 400px;
  }

  &:hover > ${Right} {
    opacity: 0.8;
  }

  & > ${Right}:hover {
    opacity:0.9;
    transform-origin: right center;
  }

`;
