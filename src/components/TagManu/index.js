import styled, { css } from 'styled-components';

const TagManu = styled.h2`
  display: inline-block;
  font-size: 55rem;
  letter-spacing:2px;
  background-color: var(--color-frontend);
  padding: 20rem 18rem;
  margin-bottom:20rem;
  color: var(--color-gray-light);

  ${({ small }) => small && css`
      font-size: 25rem;
      padding: 8rem 10rem;
  `};

`;

export default TagManu;
