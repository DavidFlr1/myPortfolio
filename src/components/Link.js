import React from 'react'
import styled from 'styled-components'
import theme from '../utils/theme'
import { space, layout, variant, flexbox, typography, color } from 'styled-system'


const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  word-wrap: break-word;
  &:focus {   
    border-color: none;
    box-shadow: none;
    outline: none;
  }

  ${space}
  ${flexbox}
  ${layout}
  ${typography}
  ${color}
  ${variant({
    variants: {
      default: {
        color: theme.colors.extended.gray600,
        fontSize: '14px',
        '&:hover': {
          color: theme.colors.extended.gray700,
          textDecoration: 'underline',
        },
      },
      scale: {
        transition: '0.2s',
        '&:hover': {
          transform: 'scale(1.1)',
        }
      },
      move: {
        transition: '0.2s ease-in-out',
        '&:hover': {
          transform: `translateX(4px)`,
        }
      },
      underline: {
        transition: '0.2s ease-in-out',
        borderBottom: '1px solid transparent',
        textDecoration: 'underline',
        '&:hover': {
          borderBottom: '1px solid currentColor',
          textDecoration: 'none',
        }
      },
      'underline-hover': {
        transition: '0.2s ease-in-out',
        borderBottom: '1px solid transparent',
        '&:hover': {
          borderBottom: '1px solid currentColor',
        }
      },
      'button-primary': {
        padding: '6px 14px 6px 14px',
        border: `2px solid ${theme.colors.primary}`,
        borderRadius: '6px',
        textAlign: 'center',
        minWidth: '50px',
        color: '#fff',
        background: `${theme.colors.primary}`,
        '&:hover': {
          background: `${theme.colors.primary}`,
          filter: `brightness(0.85)`,
          border: `2px solid ${theme.colors.primary}`,
        }
      },
      'button-primary-ghost': {
        padding: '6px 14px 6px 14px',
        border: `2px solid ${theme.colors.primary}`,
        borderRadius: '6px',
        textAlign: 'center',
        minWidth: '50px',
        color: '#fff',
        background: `transparent`,
        '&:hover': {
          background: `${theme.colors.primary}`,
          border: `2px solid ${theme.colors.primary}`,
        }
      },
      'button-light': {
        padding: '6px 14px 6px 14px',
        border: `2px solid ${theme.colors.light}`,
        borderRadius: '6px',
        textAlign: 'center',
        minWidth: '50px',
        color: `${theme.colors.extended.gray800}`,
        background: `${theme.colors.light}`,
        '&:hover': {
          background: `${theme.colors.extended.gray200}`,
          border: `2px solid ${theme.colors.extended.gray200}`,
          transform: `scale(1.05)`,
        }
      },
    },
  })}
`

const Link = ({ children, tag, ...props }) => (
  <StyledLink as={tag} {...props}>
    {children}
  </StyledLink>
)

StyledLink.defaultProps = {
  display: 'inline-block',
  textDecoration: 'none !important',
}

export default Link

