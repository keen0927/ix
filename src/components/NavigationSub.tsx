/**
 * Component > Navigation Sub
 */

import React from 'react';
import { SvgBack } from '../static/svg/svgAsset';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const ButtonBack = styled.span`
	svg {
		margin-left: -5px;
		path {
			fill: rgba(0, 0, 0, 0.32);
		}
	}
`;

const NavigationSub = () => {

  return (
    <ButtonBack>
      <Link to="/">
        <SvgBack />
      </Link>
    </ButtonBack>    
  );
};

export default NavigationSub;
