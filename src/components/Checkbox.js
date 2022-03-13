import React from 'react';
import theme from '../utils/theme'
import styled from 'styled-components';
import { color, typography, layout, space, variant } from 'styled-system'

import Typography from './Typography';

const Container =  styled.div`
  display: flex;
  white-space: nowrap;
  p {
    cursor: pointer;
  }
`
const Input = styled.input`
  display: none;
  &:checked + label {
    &:after {
      left: 50%;
    }

    &:active {
      box-shadow: none;
      &:after {
        margin-left: -0.8em;
      }
    }
  }

  ${typography}
  ${color}
  ${space}
  ${layout}
  ${variant({
    variants: {
      default: {
        '&:checked + label': {
          background: theme.colors.secondary.green500,
        },
      },
      dark: {
        '&:checked + label': {
          background: theme.colors.secondary.yellow700,
        },
      },
    },
  })}
`

const Label = styled.label`
  min-width: 35px;
  height: 20px;
  cursor: pointer;
  border-radius: 2em;
  transition: all 0.3s ease;
  padding-left: 4px;
  display: flex;
  align-items: center;

  &:active {
    &:after {
      padding-right: 0.8em;
    }
  }

  &:after, &:before {
    position: relative;
    display: block;
    content: '';
    width: 12px;
    height: 12px;
  }

  &:hover:after, &:hover:before {
    transform: scale(1.05);
  }

  &:after {
    left: 0;
    border-radius: 2em;
    background: ${theme.colors.light};
    transition: left 0.3s cubic-bezier(0.175, 0.885, 0.320, 1.275), padding .3s ease, margin .3s ease, box-shadow .3s ease;
  }

  &:before {
    display: none;
  }

  ${typography}
  ${color}
  ${space}
  ${layout}
  ${variant({
    variants: {
      default: {
        background: '#E3E3E6',
        '&::selection': {
          background: `${theme.colors.extended.gray600} !important`,
        },
        '&:active': {
          boxShadow: `inset 0 0 0 2em ${theme.colors.extended.gray300} !important`,
        }
      },
      dark: {
        background: theme.colors.dark,
        '&::selection': {
          background: `${theme.colors.extended.gray600} !important`,
        },
        '&:active': {
          boxShadow: `inset 0 0 0 2em ${theme.colors.extended.gray300} !important`,
        }
      },
    },
  })}
`

const Checkbox = ({ value, name, handleChange, variant, children, tag, ...props }) => {
  
  const handleCheck = (value) => {
    handleChange({name: name, value: !value})
  }

  return (
    <Container >
      <Input id="id" type="checkbox" variant={variant}  checked={value} onChange={() => null}/>
      <Label htmlFor="id" variant={variant} onClick={() => handleCheck(value)}/>
      <Typography mb={[0]} lineHeight={'0'} {...props} as={tag} onClick={() => handleCheck(value)}>{children}</Typography>
    </Container>
  )
}

export default Checkbox
