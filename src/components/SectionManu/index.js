import styled from 'styled-components';
import container from '../../tools/container';
import DescriptionManu from '../DescriptionManu';
import TagManu from '../TagManu';

const SectionManu = styled.section`
  padding-top:20rem;
  padding-bottom:20rem;
  ${container};
  text-align:center;

  & > ${TagManu} {
    margin-bottom:40rem;
  }

  & > ${DescriptionManu} {
    max-width: 820px;
    margin: 0 auto 40rem;
  }
`;

export default SectionManu;
