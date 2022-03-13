import React from 'react'
import styled from 'styled-components'
import theme from '../utils/theme'
import { color, typography, layout, space, variant } from 'styled-system'

const Images = styled.img`
  ${typography}
  ${color}
  ${space}
  ${layout}
  ${variant({
    variants: {
      shadow: {
        paddingTop: '100px',
      },
    },
  })}
`

const Image = ({ image, children, tag, ...props }) => (
  <Images {...props} as={tag} src={image}/>
)

Images.defaultProps = {
  mb: 3,
}

export default Image

