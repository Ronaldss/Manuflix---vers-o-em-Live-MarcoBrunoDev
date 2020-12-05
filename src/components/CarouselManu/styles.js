import styled from 'styled-components';
import { Background, WrapperThumb } from '../ThumbManu/styles';
import arrow from '../../assests/img/arrow.svg';

export const Right = styled.button`
  position: absolute;
  height:calc(100% - var(--space-top-bottom) * 2);
  width: 50rem;
  background-color: var(--color-marketing);
  right: 0; 
  opacity: 0;
  border:none;
  transition: opacity 200ms linear, transform 200ms linear;
  cursor: pointer;

  &::after {
    /* position: absolute; */
    content: url(${arrow});
    /* display: inline-block;
    transform: rotate(-90deg); */
  }
`;

export const Left = styled.button`
  position: absolute;
  height:calc(100% - var(--space-top-bottom) * 2);
  width: 50rem;
  background-color: red;
  opacity: 0;
  border:none;
  transition: opacity 200ms linear;

  &::after {
    content: url(${arrow});
    /* display: inline-block;
    transform: rotate(-90deg); */
  }
`;

export const CarouselStyle = styled.div`
  --space-top-bottom: 20rem;
  position: relative;
  display:flex;
  box-sizing: border-box;
  align-self: flex-start;
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
    transform: scaleX(1.2);
  }

`;
