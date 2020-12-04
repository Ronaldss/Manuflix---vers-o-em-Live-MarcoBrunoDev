import styled from 'styled-components';
import DescriptionManu from '../DescriptionManu';
import TagManu from '../TagManu';

const SectionManu = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30rem 50rem;

  & > ${TagManu} {
    margin-bottom:40rem;
  }

  & > ${TagManu}:not(:first-child) {
    align-self: flex-start;
  }

  & > ${DescriptionManu} {
    max-width: 820px;
    margin: 0 auto 40rem;
  }
`;

export default SectionManu;
