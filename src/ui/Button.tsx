import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type ButtonColorType = {
  [key: string]: string;
};

const buttonColor: ButtonColorType = {
  danger: 'var(--color-red-700)',
  green: 'var(--color-green-400)'
};

type StyledButtonType = {
  btntype: string | undefined;
};

const StyledButton = styled.button<StyledButtonType>`
  border-radius: var(--border-radius-sm);
  color: white;
  background-color: ${(props) =>
    props.btntype ? buttonColor[props.btntype] : buttonColor['green']};
  border: none;
  padding: 1rem 1.6rem;
  font-size: 1.4rem;
  min-width: 10rem;

  transition: all 0.15s ease;

  &:active {
    transform: translateY(3%);
  }
`;

type StyledAnchorType = {
  btnType: string | undefined;
};

const StyledLink = styled(Link)<StyledAnchorType>`
  border-radius: var(--border-radius-sm);
  color: white;
  background-color: ${(props) =>
    props.btnType ? buttonColor[props.btnType] : buttonColor['green']};
  border: none;
  padding: 1rem 1.6rem;
  font-size: 1.4rem;
  min-width: 10rem;

  transition: all 0.15s ease;

  &:active {
    transform: translateY(3%);
  }
`;

type ButtonProps = {
  el: 'button';
  children: ReactNode;
  btntype?: string;
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
  el: 'anchor';
  children: ReactNode;
  btntype?: string;
  to: string;
} & ComponentPropsWithoutRef<typeof Link>;

function Button({ el, btntype, children, ...props }: ButtonProps | AnchorProps) {
  if (el === 'anchor') {
    const anchorProps = props as AnchorProps;

    return (
      <StyledLink btnType={btntype} {...anchorProps}>
        {children}
      </StyledLink>
    );
  } else {
    const buttonProps = props as ButtonProps;

    return (
      <StyledButton btntype={btntype} {...buttonProps}>
        {children}
      </StyledButton>
    );
  }
}

export default Button;
