import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import theme from '../utils/theme'
import { navbar } from '../utils/configs'

import Hr from '../components/Hr'
import Link from '../components/Link'
import Input from '../components/Input'
import Button from '../components/Button'
import Section from '../components/Section'
import Dropdown from '../components/Dropdown'
import Checkbox from '../components/Checkbox'
import Container from '../components/Container'
import FileInput from '../components/FileInput'
import Typography from '../components/Typography'
import CollapseList from '../components/CollapseList'
import Images from '../components/Images'
import { Flex, Box } from '../components/Grid'

import hero from '../images/stock/background-1.jpeg'

const StyledSection = styled(Section)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &::before {
    position: absolute;
    content: '';
    width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${theme.colors.dark};
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
    <StyledSection id='header'>
      <Container>
        <Typography tag='p' mb={3}>Hello</Typography>
        <Typography tag='h2' mb={3} color={theme.colors.primary}>I'm David</Typography>
        <Typography tag='h5' mb={3} >Front end web developer <br/>and designer</Typography>
        <Link variant={'button-primary-ghost'} fontSize={[3]} width={'140px'} fontFamily={'Graphik-Medium'}>Contact</Link>
      </Container>
    </StyledSection>
  )
}

export default HeroSection