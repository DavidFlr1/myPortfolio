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
import FileInput from '../components/FileInput'
import Typography from '../components/Typography'
import CollapseList from '../components/CollapseList'
import Images from '../components/Images'
import { Flex, Box } from '../components/Grid'

import { SiWhatsapp, SiGmail, SiGithub, SiLinkedin } from 'react-icons/si'

const Container = styled.footer`
  position: relative;
  padding: 16px;
  text-align: center;
  z-index: 999;
`

const Footer = () => {
  return (
    <Container>
      <Typography tag='p' fontSize={[2]} color={theme.colors.extended.gray500}>Designed by David Flores using React and Gatsby, check the <Link href={''} target={'_blank'} variant='underline' >source code here</Link>.</Typography>
      <Flex justifyContent='center' color={theme.colors.extended.gray500}>
        <Link px={2} href={'tel:1528112365417'} target={'_blank'} > <SiWhatsapp fontSize='15px' /> </Link>
        <Link px={2} href={'mailto:davidricardo.flores33@gmail.com?Subject=Hi%20David%20,%20Im%20lookin%20to%20reach%20you%20from%20your%20website%20'} target={'_blank'} > <SiGmail fontSize='15px' /> </Link>
        <Link px={2} href={'https://www.linkedin.com/in/david-flores-31803b145'} target={'_blank'} > <SiLinkedin fontSize='15px' /> </Link>
        <Link px={2} href={'https://github.com/DavidFlr1'} target={'_blank'} > <SiGithub fontSize='15px' /> </Link>
      </Flex>
      <Hr background={theme.colors.extended.gray800} width={'50%'} height={'1px'} mx={'auto'} />
      <Typography tag='p' mb={0} fontSize={[2]} color={theme.colors.extended.gray500}>All rights reserved.</Typography>
    </Container>
  )
}

export default Footer