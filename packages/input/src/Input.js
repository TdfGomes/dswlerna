import styled, { css } from 'styled-components';
import tokens from '@dswlerna/tokens';

const BaseInut = styled.input`
  padding: 0 ${tokens.sizes.padding[3]}px;
  width: 250px;
  border-radius: ${tokens.sizes.radius[0]}px;
  color: ${tokens.palette.black};
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  font-size: ${tokens.sizes.font[3]}px;
  line-height: 1.5;
  &:focus {
    outline: none;
    border-color: ${tokens.palette.cyan};
  }
`;

export default BaseInut;
