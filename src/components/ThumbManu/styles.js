import styled from "styled-components";
import { WrapperAvatar } from "../AvatarManu/styles";

// export const Avatar = styled.img`
//   position: absolute;
//   top: var(--space);
//   left: var(--space);
//   width: 50rem;
//   height: 50rem;
//   border-radius: 50%;
//   border: 4rem solid var(--color-black-medium);
//   transform: translateX(calc((100% + var(--space)) * -1));
//   opacity: 0;
//   transition: transform 200ms linear, opacity 100ms linear;
// `;

export const Thumb = styled.img`
  width: 100%;
  transition: filter 100ms linear;
`;

export const WrapperThumb = styled.figure`
  opacity: 1;
  position: relative;
  border: var(--border) solid var(--color-frontend);
  width: 640px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 100ms linear;

  & > ${WrapperAvatar} {
    position: absolute;
    top: var(--space);
    left: var(--space);
    margin-right: 10rem;
    transform: translateX(calc((100% + var(--space)) * -1));
    opacity: 0;
    transition: transform 200ms linear, opacity 100ms linear;
  }
`;
export const Background = styled.div`
  --space: 10rem;
  --border: 4rem;
  --move-space: calc(var(--space) * -1);

  position: relative;
  background: var(--color-frontend);

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: calc(var(--space) * 1.4);
    height: calc(var(--space) * 1.4);
    background: var(--color-frontend);

    transition: transform 100ms linear;
  }

  &::before {
    right: 0;
    top: 0;
    transform: rotate(45deg) scale(0);
    transform-origin: right top;
  }
  &::after {
    left: 0;
    bottom: 0;
    transform-origin: left bottom;
    z-index: -1;
    transform: rotate(-45deg) scale(0);
  }

  &:hover {
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }

    & > ${WrapperThumb} {
      transform: translate(var(--move-space), var(--move-space));
      & > ${Thumb} {
        filter: brightness(0.6);
      }

      & > ${WrapperAvatar} {
        transform: translateX(0);
        opacity: 1;
        transition: transform 100ms 150ms linear, opacity 300ms 150ms linear;
      }
    }
  }
`;
