import BaseOverlay from '../Base/BaseOverlay';
import styled from 'styled-components';
import CircularProgress from '../CircularProgress/CircularProgress.component';

const Overlay = ({ children, progressColor, isShown, ...rest }) => {
  const ContentWrapper = styled.div`
    position: relative;
    z-index: -1;
  `;

  return isShown ? (
    <BaseOverlay {...rest}>
      <CircularProgress
        color={progressColor}
        style={{
          position: 'absolute'
        }}
      />
      <ContentWrapper>{children}</ContentWrapper>
    </BaseOverlay>
  ) : (
    children
  );
};
export default Overlay;
