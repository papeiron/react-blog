import styled from 'styled-components';

const StyledMiniSpinner = styled.span`
  margin: 100px auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
  display: block;

  & > div {
    background-color: var(--color-grey-500);
    height: 100%;
    width: 6px;
    display: inline-block;
    margin: 1px;

    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  & .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  & .rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  & .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  & .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(0.4);
    }
    20% {
      -webkit-transform: scaleY(1);
    }
  }

  @keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
      -webkit-transform: scaleY(1);
    }
  }
`;

function MiniSpinner() {
  return (
    <StyledMiniSpinner>
      <div className='rect1' />
      <div className='rect2' />
      <div className='rect3' />
      <div className='rect4' />
      <div className='rect5' />
    </StyledMiniSpinner>
  );
}

export default MiniSpinner;
