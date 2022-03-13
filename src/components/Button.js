import React, {useState, useEffect } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import theme from '../utils/theme'
import { space, layout, variant, flexbox, typography } from 'styled-system'


const StyledButton = styled.button`
  width: 100%;
  text-decoration: none;
  padding: 10px 12px;
  transition: all 0.2s ease-in-out;
  font-family: Graphik-Medium;
  overflow: hidden;
  position: relative;

  &:disabled {
    opacity: 0.25;
    &:hover {
      transform: none;
    }
  }

  @keyframes pulseBlue {
    0% {-moz-box-shadow: 0 0 0 0 rgba(125, 217, 255, 0.4); box-shadow: 0 0 0 0 rgba(125, 217, 255, 0.4);}
    70% {-moz-box-shadow: 0 0 0 10px rgba(125, 217, 255, 0); box-shadow: 0 0 0px 20px rgba(125, 217, 255, 0);}
    100% {-moz-box-shadow: 0 0 0 0 rgba(125, 217, 255, 0); box-shadow: 0 0 0 0 rgba(125, 217, 255, 0);}
  }
  @keyframes pulseGreen {
    0% {-moz-box-shadow: 0 0 0 0 rgba(44, 204, 107, 0.4); box-shadow: 0 0 0 0 rgba(44, 204, 107, 0.4);}
    70% {-moz-box-shadow: 0 0 0 10px rgba(44, 204, 107, 0); box-shadow: 0 0 0px 20px rgba(44, 204, 107, 0);}
    100% {-moz-box-shadow: 0 0 0 0 rgba(44, 204, 107, 0); box-shadow: 0 0 0 0 rgba(44, 204, 107, 0);}
  }
  ${css({
    lineHeight: 0,
    borderRadius: '30px',
  })}
  ${space}
  ${flexbox}
  ${layout}
  ${typography}
  ${variant({
    variants: {
      default: {
        background: `${theme.colors.extended.gray500}`,
        color: '#fff',
        border: 'none',
        '&:hover': {
          transform: 'scale(1.03)',
          animation: 'none',
        },
      },
      blue: {
        background: `${theme.colors.primary}`,
        color: '#fff',
        border: 'none',
        '&:hover': {
          transform: 'scale(1.03)',
          animation: 'none',
        },
      },
      green: {
        background: `${theme.colors.secondary.green500}`,
        color: '#fff',
        border: 'none',
        '&:hover': {
          transform: 'scale(1.03)',
          animation: 'none',
        },
      },
      yellow: {
        background: `${theme.colors.secondary.yellow700}`,
        color: '#fff',
        border: 'none',
        '&:hover': {
          transform: 'scale(1.03)',
          animation: 'none',
        },
      },
      red: {
        background: `${theme.colors.secondary.red700}`,
        color: '#fff',
        border: 'none',
        '&:hover': {
          transform: 'scale(1.03)',
          animation: 'none',
        },
      },
      login: {
        boxShadow: '0 3px 6px #7DD9FF',
        background: "linear-gradient(to bottom, #5DB9FA, #50DDF1)",
        color: '#fff',
        border: 'none',
          padding: '15px 12px',
        animation: 'pulseBlue 2s infinite',
        '&:hover': {
          transform: 'scale(1.03)',
          animation: 'none',
        },
      },
      'login-success': {
        boxShadow: '0 3px 6px #56F695',
        background: "linear-gradient(to bottom, #00AB84, #2CCC6B)",
        color: '#fff',
        border: 'none',
          padding: '15px 12px',
        animation: 'pulseGreen 2s infinite',
        '&:hover': {
          transform: 'scale(1.03)',
          animation: 'none',
        },
      },
    },
  })}
  
`

const Button = ({ children, tag, ...props }) => {
  const [isDisable, setIsDisable] = useState(false)

  useEffect(() => {
    !sessionStorage.allowedActions && sessionStorage.setItem("allowedActions", "")

    switch(props.type) {
      case 'search':
        setIsDisable(!sessionStorage.allowedActions.includes('0'))
        break
      case 'create':
        setIsDisable(!sessionStorage.allowedActions.includes('1'))
        break
      case 'update':
        setIsDisable(!sessionStorage.allowedActions.includes('2'))
        break
      case 'delete':
        setIsDisable(!sessionStorage.allowedActions.includes('3'))
        break
      default:
        setIsDisable(false)
        break
    }
    
  }, [])

  return (
    <StyledButton as={tag} {...props} disabled={isDisable}>
      {children}
    </StyledButton>
  )
}

StyledButton.defaultProps = {
  display: 'block',
  mb: 3,
  mt: 3,
}

export default Button

