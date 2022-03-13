import styled from 'styled-components'
import { position, space, layout, color, flexbox, variant } from 'styled-system'

const Section = styled.section`
  ${space}
  ${layout}
  ${color}
  ${position}
  ${flexbox}
  ${variant({
    variants: {
      blueGradient: {
        background: 'linear-gradient(to right, #a6ffff 0%, #e8ffff 100%)',
      },
      grayGradient: {
        background: 'linear-gradient(45deg,#FCFCFC,#f1f1f1)',
      },
      topGradientBorder: {
        position: 'relative',
        '&::before': {
          position: 'absolute',
          content: '""',
          width: '100%',
          height: '15px',
          top: '0',
          left: '0',
          background: 'linear-gradient(to right, #A6FFFF, #FFFFFF)',
          'z-index': '-1',
        },
      },
      backgroundImage: {
        backgroundSize: 'cover !important',
        backgroundPosition: 'center !important',
        backgroundRepeat: 'no-repeat !important',
        '@media (max-width: 1259.98px)': {
          backgroundImage: 'none !important',
        },
      },
      backgroundImageAlt: {
        backgroundSize: 'cover !important',
        backgroundPosition: 'center !important',
        backgroundRepeat: 'no-repeat !important',
      },
    },
  })}
  background: ${(props) => props.background};
`

Section.defaultProps = {
  pt: 96,
  pb: 96,
}

export default Section
