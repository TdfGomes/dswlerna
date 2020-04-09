import styled, { css } from 'styled-components';
import tokens from '@dswlerna/tokens';

const BaseButton = styled.button`
  display: inline-block;
  font-size: ${(props) =>
    props.primary ? `${tokens.sizes.font[3]}px` : `${tokens.sizes.font[0]}px`};
  font-weight: bold;
  padding: ${(props) =>
    props.primary ? `${tokens.sizes.padding[3]}px` : `${tokens.sizes.padding[0]}px`};
  margin: ${(props) =>
    props.primary ? `${tokens.sizes.margin[5]}px` : `${tokens.sizes.margin[1]}px`};
  border-radius: ${tokens.sizes.radius[0]}px;
  transition: all 250ms ease-in-out;
  ${(props) =>
    props.solid &&
    css`
      background-color: ${tokens.palette.cyan};
      color: ${tokens.palette.black};
      border: 2px solid transparent;
      &:hover {
        background-color: transparent;
        color: ${tokens.palette.cyan};
        border: 2px solid ${tokens.palette.cyan};
      }
    `};
  ${(props) =>
    props.outline &&
    css`
      background-color: transparent;
      color: ${tokens.palette.cyan};
      border: 2px solid ${tokens.palette.cyan};
      &:hover {
        background-color: ${tokens.palette.cyan};
        color: ${tokens.palette.black};
        border: 2px solid transparent;
      }
    `};
`;

export default BaseButton;
