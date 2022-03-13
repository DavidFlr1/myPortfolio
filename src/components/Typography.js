import React from 'react'
import styled from 'styled-components'
import theme from '../utils/theme'
import { color, typography, layout, space, system, variant, border } from 'styled-system'

const StyledTypography = styled.p`
  span {
    ${p => p.spanStyles}
  }
  br {
    @media (max-width: 640px) { display: none; }
  }
  ${typography}
  ${color}
  ${space}
  ${layout}
  ${border}
  ${system({textTransform: true})}
  ${variant({
    variants: {
      p: {
        color: theme.colors.dark,
        letterSpacing: '-0.3px',
        lineHeight: 1.6,
      },
      h1: {
        fontSize: [8, 8, null, 9],
      },
      h2: {
        fontSize: [6, 6, null, 7],
      },
      h3: {
        fontSize: [4, 4, null, 3],
      },
      dark: {
        color: theme.colors.darker,
        letterSpacing: '-.3px',
        lineHeight: '1.6',
      },
      upper: {
        textTransform: 'uppercase',
        letterSpacing: '2px',
        lineHeight: 0,
      },
    },
  })}
`

const Typography = ({ children, tag, ...props }) => (
  <StyledTypography {...props} as={tag}>
    {children}
  </StyledTypography>
)

StyledTypography.defaultProps = {
  mb: 3,
}

export default Typography
