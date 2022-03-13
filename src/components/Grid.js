import styled from 'styled-components'
import { space, layout, color, flexbox, typography, position, border } from 'styled-system'

export const Flex = styled.div`
  display: flex;
  ${space}
  ${layout}
  ${flexbox}
  ${color}
  ${typography}
  ${border}
  ${position}
`

Flex.defaultProps = {
  flexWrap: 'wrap',
  mx: 0,
}

export const Box = styled.div`
  ${space}
  ${layout}
  ${color}       
  ${flexbox}    
  ${position}  
  ${typography}      
  ${border}
  background: ${(props) => props.background};
  column-count: ${(props) => props.columnCount};
`

Box.defaultProps = {
  px: 3,
}
