import React from 'react'
import styled from 'styled-components'
import theme from '../utils/theme'
import { cv } from '../utils/configs'

import Link from '../components/Link'
import Section from '../components/Section'
import Container from '../components/Container'
import Typography from '../components/Typography'
import { Flex, Box } from '../components/Grid'

import about from '../images/stock/about-me.jpeg'

const StyledBox = styled(Box)`
  position: relative;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(${about});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border: 8px solid ${theme.colors.extended.gray800};
    z-index: 1;
  }
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 32px;
    left: -32px;
    border: 8px solid ${theme.colors.primary};
  }
  @media screen and (min-width: 640px) and (max-width: 738px) { &::after { display: none; } }
  @media (max-width: 348px) { &::after { display: none; } }
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
  }
`
const AboutSection = () => {
  return (
    <Section background={theme.colors.extended.gray800} id='about'>
      <Container>
        <Flex>
          <Box px={[0,3,5]} mb={[4,0,0]} width={['100%','30%','40%']} display='flex' justifyContent='center'>
            <StyledBox width={['250px','200px','300px']} height={'400px'} />
          </Box>
          <Box px={[0,3,5]} mt={[4,0,0]} width={['100%','70%','60%']}>
            <Typography tag='h4'>About Me <Line width={'100px'} /></Typography>
            <Typography tag='p'>I'm passionate for creating amazing user interfaces that either create a positive experience or solve a problem and I always do my best to find the best way to achieve that. I also enjoy supporting my team so everyone can feel good and do their best with the common goals.</Typography>
            <Typography tag='p'>I identify myself as a very extremely proactive, resilient and self-taught person who like to participate and create different projects.</Typography>
            <Flex>
              <Link href={'/contact'} variant={'button-primary'} mb={[3,0,0]} mr={[2,3,3]} fontSize={[3]} width={'140px'} fontFamily={'Graphik-Medium'}>Contact</Link>
              <Link href={cv} download variant={'button-primary-ghost'} mb={[3,0,0]} fontSize={[3]} width={'140px'} fontFamily={'Graphik-Medium'}>Download CV</Link>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export default AboutSection