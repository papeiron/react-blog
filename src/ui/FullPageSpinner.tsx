import styled from 'styled-components';

const StyledFullPageSpinner = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSpinner = styled.svg`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0px 0px 1px 1px #0000001a;
  background-color: #ef5b2b;

  animation: pulse-animation 2s infinite;

  @keyframes pulse-animation {
    0% {
      box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
      transform: scale(1);
    }
  }
`;

function FullPageSpinner() {
  return (
    <StyledFullPageSpinner>
      <StyledSpinner></StyledSpinner>
    </StyledFullPageSpinner>
  );
}

export default FullPageSpinner;
