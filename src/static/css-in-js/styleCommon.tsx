/**
 * 공통 스타일
 */

import styled from '@emotion/styled';
import styleVars from '../../static/css-in-js/styleVars';

export const ButtonTypeCircle = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #fff;
  box-shadow: ${styleVars.shadow};

  svg {
    vertical-align: middle;
    opacity: 0.4;
    transition: opacity 0.3s;

    path {
      fill: rgba(0,0,0,0.62);
    }    
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }  
`;