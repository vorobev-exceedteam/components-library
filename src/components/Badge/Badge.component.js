import React from 'react';
import styled from 'styled-components';
import ThemeService from '../../theme/ThemeService';
import BaseBadge from '../Base/BaseBadge';
import BaseContentWrapper from '../Base/BaseContentWrapper';

const Badge = ({ icon, children, ...rest }) => {
  let StyledBadge = styled(BaseBadge).attrs((props) => ({
    ...ThemeService.getBadgeStyle(
      props.theme,
      props.color,
      props.colorVariant,
      props.light
    ),
    ...props
  }))`
    background-color: ${({ bg }) => bg};
    color: ${({ text }) => text};
    box-shadow: ${({ glow, boxShadow }) =>
      glow ? `0 0 10px ${boxShadow}` : `none`};
  `;

  return (
    <StyledBadge {...rest}>
      <BaseContentWrapper>
        {icon}
        {children}
      </BaseContentWrapper>
    </StyledBadge>
  );
};

export default React.memo(Badge);
