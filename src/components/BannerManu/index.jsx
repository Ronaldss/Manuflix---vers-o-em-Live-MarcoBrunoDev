import styled from 'styled-components';
import container from '../../tools/container';
import TagManu from '../TagManu';
import TitleManu from '../TitleManu';

export const Text = styled.div`
  padding-top: 10rem;

  ${TagManu} {
    margin-bottom: 40rem;
  }
  ${TitleManu} {
    margin-bottom: 20rem;
  }
`;

export const BannerManu = styled.section`
  ${container};

  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 70cvh;
  height: 90vh;
  /* padding:70rem 0 70rem 0; */
  width: 1200rem;
`;
