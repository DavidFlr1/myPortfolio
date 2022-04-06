import React from 'react'
import styled from 'styled-components'
import theme from '../utils/theme'

import Section from '../components/Section'
import Container from '../components/Container'
import Typography from '../components/Typography'
import { Flex, Box } from '../components/Grid'

import { BiCodeBlock, BiUserPin } from "react-icons/bi";
import { FiLayout } from "react-icons/fi";
import { VscDeviceMobile } from "react-icons/vsc";

import appDev from '../images/stock/work-1.png'
import webDesign from '../images/stock/work-7.png'
import appDesign from '../images/stock/work-5.png'
import uxResearch from '../images/stock/work-2.png'

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
    margin-top: 2px;
  }
`

const Service = styled(Box)`
  position: relative;
  border-radius: 10px;
  height: 100%;
  transition: all 0.3s ease-in-out;
  cursor: default;
  overflow: hidden;
  z-index: 1;
  &:hover {
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.5);
    transform: scale(1.02);
  }
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: url(${p => p.bgImage});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    z-index: -2;
  }
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    background: ${p => `linear-gradient(135deg, ${p.bgColor} 10%, ${p.bgColor}99 100%)`};
    // opacity: 0.9;
    z-index: -1;
  }
`

const ServicesSection = () => {
  return (
    <Section background={theme.colors.extended.gray800} id='services' style={{zIndex: '-3'}}>
      <Container>
        <Typography tag='h4'>Services <Line width={'90px'} /></Typography>
        <Typography tag='p'>From a landing page to a complex custom page with different services<br/> such a blog, an eCommerce or simple web maintenance<br/> I can provide anything you need</Typography>

        <Flex>
          <Box px={0} pr={[0,0,3]} py={[2,2,3]} width={['100%','100%',1/2]}>
            <Service px={5} py={5} bgImage={webDesign} bgColor={theme.colors.secondary.blue500}>
              <FiLayout fontSize={'38px'} color={theme.colors.light} />
              <Typography tag='h5' mb={1}>Web Design</Typography>
              <Typography tag='p'>Web Design area cover the visual, functional and aesthetic needs of the site or application, fulfilling the established objectives.</Typography>
            </Service>
          </Box>
          <Box px={0} pl={[0,0,3]} py={[2,2,3]} width={['100%','100%',1/2]}>
            <Service px={5} py={5} bgImage={appDev} bgColor={theme.colors.secondary.yellow500}>
              <BiCodeBlock fontSize={'38px'} color={theme.colors.light} />
              <Typography tag='h5' mb={1}>Web Development</Typography>
              <Typography tag='p'>Technical development of the site where the format is applied and the logic is implemented along with the consumption of services (APIs). </Typography>
            </Service>
          </Box>
          <Box px={0} pr={[0,0,3]} py={[2,2,3]} width={['100%','100%',1/2]}>
            <Service px={5} py={5} bgImage={uxResearch} bgColor={theme.colors.secondary.red500}>
              <BiUserPin fontSize={'38px'} color={theme.colors.light} />
              <Typography tag='h5' mb={1}>UX Research</Typography>
              <Typography tag='p'>The Interaction Design area (User Experience) is an area that registers, evaluates and defines the perception, behavior and usability of a site with its users. </Typography>
            </Service>
          </Box>
          <Box px={0} pl={[0,0,3]} py={[2,2,3]} width={['100%','100%',1/2]}>
            <Service px={5} py={5} bgImage={appDesign} bgColor={theme.colors.secondary.green500}>
              <VscDeviceMobile fontSize={'38px'} color={theme.colors.light} />  
              <Typography tag='h5' mb={1}>App Design</Typography>
              <Typography tag='p'>Identify user expectations and needs to determine specific content on the site or application, focusing on functionality. </Typography>
            </Service>
          </Box>

        </Flex>
      </Container>
    </Section>
  )
}

export default ServicesSection