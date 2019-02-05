import styled from 'styled-components';
import theme from '@client/utils/theme';

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

Image.displayName = 'Image';

Image.defaultProps = {
  theme,
};

export default Image;