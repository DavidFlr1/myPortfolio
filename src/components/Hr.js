import React from 'react'
import styled from 'styled-components'
import { color, typography, layout, space, system, variant } from 'styled-system'

const StyledHr = styled.div`
  ${typography}
  ${color}
  ${space}
  ${layout}
  ${system({textTransform: true})}
  ${variant({
    variants: {
      vertical: {
        height: '100%',
        width: '1px',
      },
      horizontal: {
        width: '100%',
        height: '1px',
      },
    },
  })}
`

const Typography = ({ tag, ...props }) => (
  <StyledHr {...props} as={tag} style={{background: props.background}}></StyledHr>
)

StyledHr.defaultProps = {
  mb: 1,
  mt: 1,
  background: '#fff',
  borderRadius: '50%',
}

export default Typography
