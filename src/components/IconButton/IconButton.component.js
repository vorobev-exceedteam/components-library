import React from 'react';
import styled from 'styled-components';
import ThemeService from '../../theme/ThemeService';

const IconButton = ({ size, variant, round, ...rest }) => {

  let StyledIconButton = ThemeService.getButtonVariant(variant);

  StyledIconButton = styled(StyledIconButton).attrs((props) => ({
    ...ThemeService.getIconButtonSize(size),
    ...props
  }))`
    font-size: ${({ fontSize }) => fontSize};
    line-height: ${({ lineHeight }) => lineHeight};
    padding: ${({ padding }) => padding};
  `

  if (round) {
    StyledIconButton = styled(StyledIconButton)`
      border-radius: 100%;
    `;
  }



  return <StyledIconButton {...rest}/>;
};

export default React.memo(IconButton);
