import styled from 'styled-components';
import { WrapperThumb } from '../ThumbManu/styles';

const CarouselStyle = styled.div`
  display:flex;
  & ${WrapperThumb} {
    width: 300px; 
  }
`;

export default CarouselStyle;
