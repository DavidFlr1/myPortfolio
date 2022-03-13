import React from 'react'
import styled from 'styled-components'
import theme from '../utils/theme'
import { fullPortrait } from '../utils/configs'

import Link from '../components/Link'
import Section from '../components/Section'
import Container from '../components/Container'
import Typography from '../components/Typography'

const StyledSection = styled(Section)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &::before {
    display: none;
    position: absolute;
    content: '';
    width: 20%;
    height: 100%;
    left: 65%;
    top: 0;
    background: url(${fullPortrait});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    z-index: -1;
  }
  &::after {
    position: absolute;
    content: '';
    width: 30%;
    height: 100%;
    right: 0;
    top: 0;
    background: ${theme.colors.primary};
    z-index: -2;
  }
  @media (max-width: 348px) { &::after { display: none; } }
`

const HeroSection = () => {
  return (
    <StyledSection id='home'>
      <Container>
        <Typography tag='p' mb={3}>Hello</Typography>
        <Typography tag='h2' mb={3} color={theme.colors.primary}>I'm David</Typography>
        <Typography tag='h5' mb={3} >Front end web developer <br/>and designer</Typography>
        <Link href={'/contact'} variant={'button-primary-ghost'} fontSize={[3]} width={'140px'} fontFamily={'Graphik-Medium'}>Contact</Link>
      </Container>
    </StyledSection>
  )
}

export default HeroSection