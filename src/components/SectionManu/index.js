import styled from 'styled-components';
import container from '../../tools/container';
import DescriptionManu from '../DescriptionManu';
import TagManu from '../TagManu';

const SectionManu = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top:20rem;
  padding-bottom:20rem;
  ${container};

  & > ${TagManu} {
    margin-bottom:40rem;
  }

  & > ${TagManu}:not(:first-child) {
    align-self: flex-:start;
  }

  & > ${DescriptionManu} {
    max-width: 820px;
    margin: 0 auto 40rem;
  }
`;

export default SectionManu;
