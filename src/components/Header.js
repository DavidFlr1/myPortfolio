import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import theme from '../utils/theme'

import Link from './Link'
import Typography from './Typography'
import { Flex, Box } from './Grid'

import { AiOutlineMenu, AiOutlineHome, AiOutlinePlusCircle, AiOutlineCode, AiOutlineContainer, AiOutlineMail } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'

const Container = styled.header`
  position: ${p => p.position};
  width: 100%;
  padding: 0 16px;
  background: ${theme.colors.extended.gray800};
  z-index: 999;
  transition: all 0.2s ease-in-out;
  @media (max-width: 639px) { padding: 0;}
`
  
const WebWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 639px) { display: none }
`

const MobileWrapper = styled.div`
  width: 100%;
  padding: 16px;
  @media (min-width: 640px) { display: none }
`
const MobilMenu = styled(Box)`
  position: absolute;
  padding: 0;
  width: 100%;
  height: 100vh;
  left: -150%;
  top: 0;
  background: rgba(88,88,90,0.95);
  z-index: 999;
  &.active {
    animation: show 0.4s forwards;
    @keyframes show {
      0% { left: -150% }
      100% { left: 0; }
    }
  }
  &.close {
    animation: hide 0.4s forwards;
    @keyframes hide {
      0% { left: ${props => props.left} }
      100% { left: -150%; }
    }
  }
`
const Item = styled(Box)`
  position: relative; 
  font-family: Graphik-Medium;
  color: ${theme.colors.light};
  &:hover {
    color: ${theme.colors.primary};
  }
`


const Header = () => {
  const [open, setOpen] = useState(false)
  const [left, setLeft] = useState('-150%')
  const [position, setPosition] = useState('relative')

  useEffect(() => {
    window.scrollY && setPosition('fixed')
    window.addEventListener('scroll', () => {
      let activePosition = ''
      if (window.scrollY > 50) {
        activePosition = 'fixed'
      }
      setPosition(activePosition)
    })
  }, [])
  
  return (
    <Container position={position}>
      <Box px={0} position='relative'>
        <WebWrapper>
          <Box px={0} width={['100%','30%','20%',null,'15%']} textAlign={['center','left','left']}>
            <Typography mb={0} fontFamily={'Graphik-Medium'} letterSpacing={'2px'} spanStyles={{color: theme.colors.primary}}>My <span>PORTFOLIO</span></Typography>
          </Box>
          <Box px={0} width={['0','70%','60%',null,'40%']} height={'100%'} display={['none','flex','flex']} alignItems='center' justifyContent='space-around'>
            <Item px={0}> <Link fontSize={[3]} href={'/#home'}>Home</Link> </Item>
            <Item px={0}> <Link fontSize={[3]} href={'/#about'}>About Me</Link> </Item>
            <Item px={0}> <Link fontSize={[3]} href={'/#experience'}>Experience</Link> </Item>
            <Item px={0}> <Link fontSize={[3]} href={'/#services'}>Services</Link> </Item>
            <Link href={'/contact'} variant={'button-primary-ghost'} fontSize={[3]} fontFamily={'Graphik-Medium'}>Contact</Link>
          </Box>
        </WebWrapper>

        <MobileWrapper>
          <Box px={0} width={['100%']} textAlign={['center']}>
            <Typography mb={0} fontFamily={'Graphik-Medium'} letterSpacing={'2px'} spanStyles={{color: theme.colors.primary}}>My <span>PORTFOLIO</span></Typography>
          </Box>
          <AiOutlineMenu fontSize={'26px'} color={theme.colors.light} style={{position: 'absolute', right: '0', top: '0', margin: '14px'}} onClick={() => {setOpen(true); setLeft('-100%')}}/>

          <MobilMenu className={open ? 'active' : 'close'} left={left} id='mobil-menu'>
            <Flex px={4} py={4} justifyContent='center' alignItems='center'> <Box width='140px' height='140px' background='white' borderRadius='50%'></Box></Flex>
            <Box px={0} mx={5} borderTop={`1px solid ${theme.colors.extended.gray600}`}>
              <Item px={0} py={2}><AiOutlineHome fontSize={'20px'} style={{position: 'relative', top: '4px', marginRight: '8px'}} /> <Link fontSize={[3]} href={'/#home'}>Home</Link> </Item>
              <Item px={0} py={2}><AiOutlinePlusCircle fontSize={'20px'} style={{position: 'relative', top: '4px', marginRight: '8px'}} /> <Link fontSize={[3]} href={'/#about'}>About Me</Link> </Item>
              <Item px={0} py={2}><AiOutlineCode fontSize={'20px'} style={{position: 'relative', top: '4px', marginRight: '8px'}} /> <Link fontSize={[3]} href={'/#experience'}>Experience</Link> </Item>
              <Item px={0} py={2}><AiOutlineContainer fontSize={'20px'} style={{position: 'relative', top: '4px', marginRight: '8px'}} /> <Link fontSize={[3]} href={'/#services'}>Services</Link> </Item>
              <Item px={0} py={2}><AiOutlineMail fontSize={'20px'} style={{position: 'relative', top: '4px', marginRight: '8px'}} /> <Link fontSize={[3]} href={'/contact'}>Contact</Link> </Item>
            </Box>
            <IoMdClose fontSize={'22px'} color={theme.colors.light} style={{position: 'absolute', top: '16px', right: '16px'}} onClick={() => {setOpen(!open); setLeft('0')}}/>
          </MobilMenu>
        </MobileWrapper>
      </Box>
    </Container>
  )
}

export default Header