import React from 'react'
import styled from 'styled-components'
import theme from '../utils/theme'
import { cv } from '../utils/configs'

import Link from '../components/Link'
import Section from '../components/Section'
import Container from '../components/Container'
import Typography from '../components/Typography'
import { Box } from '../components/Grid'

import { SiWhatsapp, SiGmail, SiGithub, SiLinkedin } from 'react-icons/si'

const Wrapper = styled(Box)`
  padding: 16px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: ${theme.colors.light};
  background: ${theme.colors.extended.gray800};
  border: 2px solid ${theme.colors.extended.gray800};
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${p => p.bgColor};
  }
  @media (max-width: 371px) {
    div {
      width: 30px;
    }
    p {
      font-size: 14px;
    }
    svg {
      font-size: 18px;
    }
  }
`

const Line = styled.div`
  position: relative;
  width: ${p => p.width};
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100$;
    top: 0;
    border: 1px solid ${theme.colors.primary};
    z-index: -1;
  }
`

const ContactSection = () => {
  return (
    <Section >
      <Container>
        <Typography tag='h2' mb={5} color={theme.colors.primary}>Contact Me <Line width={'190px'} /></Typography>

        <Box px={0} pl={[0,5]}>
          <Typography tag='h5' mb={0}>Where you can reach me?</Typography>
          <Link width='100%' href={'mailto:davidricardo.flores33@gmail.com?Subject=Hi%20David%20,%20Im%20lookin%20to%20reach%20you%20from%20your%20website%20'} target={'_blank'}>
            <Wrapper bgColor={theme.colors.secondary.red500}>
              <Box px={0} width={'50px'} lineHeight={'0px'}>
                <SiGmail fontSize='28px' />
              </Box>
              <Typography tag='p' mb={0} lineHeight={'0px'}>davidricardo.flores33@gmail.com</Typography>
            </Wrapper>
          </Link>
          <Link width='100%' href={'tel:1528112365417'} target={'_blank'}>
            <Wrapper bgColor={theme.colors.secondary.green500}>
              <Box px={0} width={'50px'} lineHeight={'0px'}>
                <SiWhatsapp fontSize='28px' />
              </Box>
              <Typography tag='p' mb={0} lineHeight={'0px'}>Mexico - 1 52 81 1236 5417</Typography>
            </Wrapper>
          </Link>

          <Typography tag='h5' mb={0} mt={5}>Want to know more about my work?</Typography>
          <Link width='100%' href={'https://www.linkedin.com/in/david-flores-31803b145'} target={'_blank'}>
            <Wrapper bgColor={theme.colors.secondary.blue500}>
              <Box px={0} width={'50px'} lineHeight={'0px'}>
                <SiLinkedin fontSize='28px' />
              </Box>
              <Typography tag='p' mb={0} lineHeight={'0px'}>David Ricardo Flores Tena</Typography>
            </Wrapper>
          </Link>
          <Link width='100%' href={'https://github.com/DavidFlr1'} target={'_blank'}>
            <Wrapper bgColor={theme.colors.secondary.indigo500}>
              <Box px={0} width={'50px'} lineHeight={'0px'}>
                <SiGithub fontSize='28px' />
              </Box>
              <Typography tag='p' mb={0} lineHeight={'0px'}>DavidFlr1</Typography>
            </Wrapper>
          </Link>

          <Typography tag='h5' mb={0} mt={5}>Download my CV</Typography>
          <Link width='100%' href={cv} target={'_blank'} download >
            <Wrapper bgColor={theme.colors.secondary.yellow500}>
              <Box px={0} width={'50px'} lineHeight={'0px'}>
                <SiGithub fontSize='28px' />
              </Box>
              <Typography tag='p' mb={0} lineHeight={'0px'}>David Flores</Typography>
            </Wrapper>
          </Link>
        </Box>

      </Container>
    </Section>
  )
}

export default ContactSection