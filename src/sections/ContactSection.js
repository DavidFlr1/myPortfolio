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

import bg from '../images/stock/background-shape-yellow-gradiant.png'

const StyledSection = styled(Section)`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: url(${bg});
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    opacity: 0.7;
    z-index: -1;
  }
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    background: ${theme.colors.primary};
    z-index: -2;
  }
`

const Line = styled.div`
  position: relative;
  width: ${p => p.width};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100$;
    top: 0;
    left: 0;
    border-bottom: 1px solid ${theme.colors.light};
  }
`

const ContactSection = () => {
  return (
    <StyledSection pt={'64px'} pb={'64px'}>
      <Container>
        <Typography tag='h4' mb={2}>Any project in mind?</Typography>
        <Line width={'10%'} />
        <Link variant={'button-light'} my={3} fontSize={[3]} width={'140px'} fontFamily={'Graphik-Medium'}>HIRE ME</Link>
      </Container>
    </StyledSection>
  )
}

export default ContactSection