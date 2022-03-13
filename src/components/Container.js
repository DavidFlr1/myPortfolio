import React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'
import css from '@styled-system/css'

import { layout, flexbox, space, position } from 'styled-system'

const StyledContainer = styled.div`
  ${space}
  ${layout}
  ${flexbox}
  ${position}
  ${css({
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingRight: 3,
    paddingLeft: 3,
  })}
    ${variant({
    variants: {
      narrow: {
        maxWidth: ['54rem', '64rem', '68rem', '86rem', '111.8rem'],
      },
    },
  })}
  max-width: ${(props) => props.maxWidth};
`

const Container = ({ children, ...props }) => <StyledContainer {...props}>{children}</StyledContainer>

Container.defaultProps = {
  maxWidth: [0, 1, 2, 3, 4],
}

export default Container
