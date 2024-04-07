import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

type ButtonColorType = {
  [key: string]: string;
};

const buttonColor: ButtonColorType = {
  danger: 'var(--color-red-700)',
  green: 'var(--color-green-400)'
};

const commonStyles = css`
  border-radius: var(--border-radius-xlg);
  color: var(--color-grey-50);
  box-shadow: var(--shadow-sm);
  padding: 1rem 1.6rem;
  font-size: 1.4rem;
  min-width: 10rem;
  border: none;

  transition: all 0.15s ease;
  &:active {
    transform: translateY(3%);
  }
`;

type StyledButtonType = {
  btntype: string | undefined;
};

const StyledButton = styled.button<StyledButtonType>`
  background-color: ${(props) =>
    props.btntype ? buttonColor[props.btntype] : buttonColor['green']};
  ${commonStyles}
`;

type StyledAnchorType = {
  btnType: string | undefined;
};

const StyledLink = styled(Link)<StyledAnchorType>`
  background-color: ${(props) =>
    props.btnType ? buttonColor[props.btnType] : buttonColor['green']};
  ${commonStyles}
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
      <StyledButton role='button' btntype={btntype} {...buttonProps}>
        {children}
      </StyledButton>
    );
  }
}

export default Button;
