import React from 'react'
import styled from 'styled-components'
import theme from '../utils/theme'
import { color, typography, layout, space, variant } from 'styled-system'

const Styled = styled(Input)`
  ${typography}
  ${color}
  ${space}
  ${layout}
  ${variant({
    variants: {
      default: {
        background: 'yellow',
      },
    },
  })}
`
const FileInput = ({ children, tag, ...props }) => {
  return (
    <Styled {...props} as={tag}>
      {children}
    </Styled>
  )
}

Styled.defaultProps = {
  mb: 0,
}

export default FileInput
