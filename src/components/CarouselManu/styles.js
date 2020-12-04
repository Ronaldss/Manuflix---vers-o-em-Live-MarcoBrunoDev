import styled from 'styled-components';
import { Background, WrapperThumb } from '../ThumbManu/styles';

const CarouselStyle = styled.div`
  display:flex;
  align-self: flex-start;
  width: 100%;
  padding: 20rem 30rem;
  overflow: hidden;

  & > ${Background} {
    margin-right: 20rem;
  }

  & ${WrapperThumb} {
    width: 400px;
  }
`;

export default CarouselStyle;
