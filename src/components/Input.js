import React from 'react'
import styled from 'styled-components'
import theme from '../utils/theme'
import { color, typography, layout, space, variant } from 'styled-system'

import { Input } from 'reactstrap'

const StyledInput = styled(Input)`
  ${typography}
  ${color}
  ${space}
  ${layout}
  ${variant({
    variants: {
      rounded: {
        borderRadius: '20px !important',
      },
      'rounded-shadow': {
        boxShadow: '0 0 12px #C3CBD3 !important',
        border: '1px solid #9FA6AE',
        borderRadius: '20px !important',
      },
    },
  })}
`

const Inputs = ({ children, tag, ...props }) => (
  <StyledInput invalid={props.require[props.name]} {...props} as={tag}>
    {children}
  </StyledInput>
)

StyledInput.defaultProps = {
  mb: 0,
  width: '100%',
}

export default Inputs

