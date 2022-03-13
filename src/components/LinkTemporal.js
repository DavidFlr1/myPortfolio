import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import { space, layout, variant, flexbox, typography } from 'styled-system'

const StyledButton = styled.a`
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  ${css({
    lineHeight: 0,
    borderRadius: 0,
  })}
  ${space}
  ${flexbox}
	${layout}
  ${typography}
	${variant({
    variants: {
      primary: {
        background: 'primary',
        color: '#ffffff',
        border: '1px solid',
        borderColor: 'primary',
        '&:hover': {
          background: '#27B3BA',
          color: 'light',
          border: '1px solid',
          borderColor: '#27B3BA',
          transform: 'scale(1.05)',
        },
      },
      'primary-hover-light': {
        background: 'primary',
        color: '#ffffff',
        border: '1px solid',
        borderColor: 'primary',
        '&:hover': {
          background: 'light',
          color: 'dark',
          border: '1px solid',
          borderColor: 'primary',
        },
      },
      'primary-squared': {
        borderRadius: '0px !important',
        background: 'primary',
        color: 'dark',
        border: '1px solid',
        borderColor: 'dark',
        '&:hover': {
          background: 'dark',
          color: 'light',
          border: '1px solid',
          borderColor: 'dark',
        },
      },
      'secondary-indigo': {
        background: 'secondary.indigo500',
        color: '#ffffff',
        border: '1px solid',
        borderColor: 'secondary.indigo500',
        '&:hover': {
          background: '#29389B',
          color: 'light',
          border: '1px solid',
          borderColor: '#29389B',
          transform: 'scale(1.05)',
        },
      },
      'secondary-indigo-hover-light': {
        background: 'secondary.indigo500',
        color: '#ffffff',
        border: '1px solid',
        borderColor: 'secondary.indigo500',
        '&:hover': {
          background: 'light',
          color: 'dark',
          border: '1px solid',
          borderColor: 'secondary.indigo500',
        },
      },
      'secondary-green': {
        background: 'secondary.green500',
        color: '#ffffff',
        border: '1px solid',
        borderColor: 'secondary.green500',
        '&:hover': {
          background: '#00916F',
          color: 'light',
          border: '1px solid',
          borderColor: '#00916F',
          transform: 'scale(1.05)',
        },
      },
      'secondary-green-hover-light': {
        background: 'secondary.green500',
        color: '#ffffff',
        border: '1px solid',
        borderColor: 'secondary.green500',
        '&:hover': {
          background: 'light',
          color: 'dark',
          border: '1px solid',
          borderColor: 'secondary.green500',
        },
      },
      dark: {
        background: 'dark',
        color: '#ffffff',
        border: '1px solid',
        borderColor: 'dark',
        '&:hover': {
          background: 'light',
          color: 'dark',
          border: '1px solid',
          borderColor: 'dark',
        },
      },
      'dark-alt': {
        background: 'dark',
        color: '#ffffff',
        border: '1px solid',
        borderColor: 'dark',
        '&:hover': {
          background: 'extended.gray700',
        },
      },
      'dark-squared': {
        borderRadius: '0px !important',
        background: 'light',
        color: 'dark',
        border: '1px solid',
        borderColor: 'dark',
        '&:hover': {
          background: 'dark',
          color: 'light',
          border: '1px solid',
          borderColor: 'dark',
        },
      },
      'dark-green': {
        background: 'secondary.green700',
        color: '#ffffff',
        border: '1px solid',
        borderColor: 'secondary.green700',
        '&:hover': {
          background: '#005B5E',
          color: 'light',
          border: '1px solid',
          borderColor: '#005B5E',
          transform: 'scale(1.05)',
        },
      },
      'dark-indigo': {
        background: 'secondary.indigo700',
        color: '#ffffff',
        border: '1px solid',
        borderColor: 'secondary.indigo700',
        '&:hover': {
          background: '#29389B',
          color: 'light',
          border: '1px solid',
          borderColor: '#29389B',
          transform: 'scale(1.05)',
        },
      },
      orange: {
        background: '#FE492D',
        color: '#ffffff',
        border: '1px solid',
        borderColor: '#FE492D',
        '&:hover': {
          opacity: 0.8,
          color: 'light',
          border: '1px solid',
          borderColor: '#FE492D',
          transform: 'scale(1.05)',
        },
      },
      green: {
        background: '#86BC25',
        color: '#ffffff',
        border: '1px solid',
        borderColor: '#86BC25',
        '&:hover': {
          opacity: 0.8,
          color: 'light',
          border: '1px solid',
          borderColor: '#86BC25',
          transform: 'scale(1.05)',
        },
      },
      red: {
        background: '#ED3555',
        color: '#ffffff',
        border: '1px solid',
        borderColor: '#ED3555',
        '&:hover': {
          opacity: 0.8,
          color: 'light',
          border: '1px solid',
          borderColor: '#ED3555',
          transform: 'scale(1.05)',
        },
      },
      blue: {
        background: '#139FDA',
        color: '#ffffff',
        border: '1px solid',
        borderColor: '#139FDA',
        '&:hover': {
          opacity: 0.8,
          color: 'light',
          border: '1px solid',
          borderColor: '#139FDA',
          transform: 'scale(1.05)',
        },
      },
      light: {
        background: 'light',
        color: 'dark',
        border: '1px solid',
        borderColor: 'light',
        '&:hover': {
          background: '#E6E6E6',
          color: 'dark',
          border: '1px solid',
          borderColor: '#E6E6E6',
          transform: 'scale(1.05)',
        },
      },
      'light-gray': {
        background: '#F4F6F9',
        color: 'extended.gray700',
        border: '1px solid',
        borderColor: '#F4F6F9',
        '&:hover, &.active': {
          background: '#E6E6E6',
          color: 'extended.gray700',
          border: '1px solid',
          borderColor: '#E6E6E6',
          transform: 'scale(1.05)',
        },
      },
      'light-gray-ghost': {
        background: '#F4F6F9',
        color: 'extended.gray700',
        border: '1px solid',
        borderColor: '#F4F6F9',
        '&:hover, &.active': {
          background: '#E6E6E6',
          color: 'extended.gray700',
          border: '1px solid',
          borderColor: '#E6E6E6',
        },
      },
      'light-ghost': {
        background: 'transparent',
        color: 'light',
        border: '1px solid',
        borderColor: 'light',
        '&:hover': {
          background: 'light',
          color: 'dark',
          border: '1px solid',
          borderColor: 'light',
        },
      },
      'light-ghost-alt': {
        background: 'transparent',
        color: 'dark',
        border: '1px solid',
        borderColor: 'dark',
        '&:hover': {
          background: 'light',
        },
      },
      ghost: {
        background: 'transparent',
        color: 'dark',
        border: '1px solid',
        borderColor: 'dark',
        '&:hover': {
          background: 'dark',
          color: 'light',
          border: '1px solid',
          borderColor: 'dark',
        },
      },
    },
  })}
  text-align: center;
  line-height: ${(props) => props.lineHeight};
  font-size: ${(props) => props.fontSize};
`

const Button = ({ children, tag, ...props }) => (
  <StyledButton as={tag} {...props}>
    {children}
  </StyledButton>
)

StyledButton.defaultProps = {
  display: 'inline-block',
  p: ['1rem 1.8rem', '1.2rem 2.4rem'],
  variant: 'primary',
  fontSize: ['12.8px', '1.6rem'],
}

export default Button
