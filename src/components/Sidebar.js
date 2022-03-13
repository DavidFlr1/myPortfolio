import React, { useState } from 'react'
import styled from 'styled-components'
import { Consumer } from '../context/context'

import { IoPersonCircleOutline, IoHomeSharp, IoRepeat, IoNotificationsSharp, IoSettingsSharp } from "react-icons/io5";
import { FaStore, FaConciergeBell, FaUserFriends, FaSwatchbook, FaDollyFlatbed, FaIdBadge, FaDollarSign, FaChartPie, FaFunnelDollar} from 'react-icons/fa'

import Hr from './Hr'
import Checkbox from './Checkbox'
import Typography from './Typography'
import { Flex, Box } from './Grid'
import { Switch } from '@material-ui/core';

const Wrapper = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
`

const Container = styled.div `
  width: 56px;
  height: 100vh;
  background: #5DB9FA;
  overflow: hidden;
  position: relative;
  transition: 0.5s;
  &:hover {
    width: 220px;
  }
`

const Header = styled.div `
  margin: 4px;
  padding: 6px 2px;
  border-radius: 8px;
  display: flex;
  white-space: nowrap;
  transition: 0.5s;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`

const Body = styled.div `
  margin: 10px 0;
`

const Element = styled.div.attrs((props) => ({ className: props.className })) `
  margin: 4px 6px;
  padding: 6px 4px;
  display: flex;

  white-space: nowrap;
  color: #fff;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    color: #3A3A3C;
    transform: translateX(5px);
  }

  &.in {
    p {
      animation: bounceIn 0.5s;
      @keyframes bounceIn {
        0% { opacity: 0; transform: translateX(10px); }
        100% { opacity: 1; transform: translateX(0); }
      }
    }
  }

  &.out {
    p {
      animation: bounceOut 0.5s;
      @keyframes bounceOut {
        0% { opacity: 1; transform: translateX(0); }
        100% { opacity: 0; transform: translateX(10px); }
      }
    }
  }

  &.body {
    margin: 6px;
    padding: 6px 4px 0 4px;
    &:hover {
      transform: translateX(0px);
    }
  }

`

const SubElement = styled.div.attrs((props) => ({ className: props.className }))`
  margin: 2px 0px 0px 0;
  // padding: 4px 4px;
  display: flex;
  width: 100%;

  white-space: nowrap;
  color: #fff;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    color: #3A3A3C;
    transform: translateX(5px);
  }

  &.in {
    p {
      animation: bounceIn 0.5s;
      @keyframes bounceIn {
        0% { opacity: 0; transform: translateX(10px); }
        100% { opacity: 1; transform: translateX(0); }
      }
    }
  }

  &.out {
    p {
      animation: bounceOut 0.5s;
      @keyframes bounceOut {
        0% { opacity: 1; transform: translateX(0); }
        100% { opacity: 0; transform: translateX(10px); }
      }
    }
  }

  &.active {
    color: #3A3A3C;
  }

  span {
    font-family: Graphik-Regular;
    font-size: 18px;
    line-height: 1.2;
    transition: all 0.3s ease;
    &.hide {
      opacity: 0;
    }
  }
`

const Footer = styled.div `
  width: 100%;
  position: absolute;
  bottom: 0;
`

const dashboardIcons = [
  <FaStore fontSize={'20px'}/>, 
  <FaConciergeBell fontSize={'20px'}/>, 
  <FaUserFriends fontSize={'20px'}/>, 
  <FaSwatchbook fontSize={'20px'}/>, 
  <FaDollyFlatbed fontSize={'20px'}/>,
  <FaIdBadge fontSize={'20px'}/>,
  <FaDollarSign fontSize={'20px'}/>,
  <FaChartPie fontSize={'20px'}/>,
  <FaFunnelDollar fontSize={'20px'}/>,
]

const Sidebar = ({ contents, activeIndex, handleLink, handleChange, values }) => {
  const [toggle, setToggle] = useState(false)
  const [open, setOpen] = useState(activeIndex && parseInt(activeIndex.charAt(0)))
  const [active, setActive] = useState(activeIndex)

  const handleHome = () => {
    setOpen(null)
    setActive('')
    handleLink('/dashboard', null)
  }

  const handleElement = (link, actions, index, subIndex) => {
    const sidebarIndex = index.toString() + subIndex.toString()
    setActive(sidebarIndex)
    handleLink(link, actions, sidebarIndex)
  }

  return (
    <Wrapper>
      <Consumer>
        {(context) => (
          <Container onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)}>
            <Header>
              <Box px={[1]} pr={[0]} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <IoPersonCircleOutline color={'#fff'} fontSize={'34px'}/>
              </Box>
              <Box px={[0]}>
                <Typography tag={'p'} color={['light']} mb={1} ml={[2]} fontSize={['16px']} fontFamily={['Graphik-Medium']}  lineHeight={'0'}>{values.username}</Typography>
                <Typography tag={'p'} color={['light']} mb={0} ml={[2]} fontSize={['14px']} fontFamily={['Graphik-Regular']} lineHeight={'0'}>{values.userRol} - {values.userId}</Typography>
              </Box>
            </Header>
            <Hr variant={'horizontal'} background={'#fff'} mx={[2]} />

            <Body>
              <Element className={toggle ? ' body in' : ' body'} onClick={() => handleHome()}>
                <Box px={['8px']} pr={[0]} display={'flex'} justifyContent={'center'} alignItems={'start'}>
                  <IoHomeSharp fontSize={'20px'}/>
                </Box>
                <Box px={[0]} >
                  <Typography tag={'p'} mb={0} ml={['19px']} fontSize={['17px']} fontFamily={['Graphik-Medium']}>Home</Typography>
                </Box>
              </Element>
              {contents.elements.map((item, index) => (
                <div key={index}>
                  {item.permission.includes(values.rolId) &&
                    <>
                      <Hr variant={'horizontal'} background={'#fff'} mx={[2]} hidden={!(open === index)}/>
                      <Element className={toggle ? ' body in' : ' body'} onClick={() => setOpen(index)}>
                        <Box px={['8px']} pr={[0]} display={'flex'} justifyContent={'center'} alignItems={'start'}>
                          {dashboardIcons[item.icon]}
                        </Box>
                        <Box px={[0]} display='flex'>
                          <Typography tag={'p'} mb={'4px'} ml={['19px']} fontSize={['17px']} fontFamily={['Graphik-Medium']}>{item.name}</Typography>
                        </Box>
                      </Element>
                    </>
                  }
                  <div hidden={!(open === index)}>
                    {item.subElements.map((subItem, subIndex) => (
                      <div key={subIndex}>
                      {subItem.permission.includes(values.rolId) &&
                        <>
                          <SubElement className={toggle ? `in ${active === index.toString() + subIndex.toString() && 'active'}` : `out ${active === index.toString() + subIndex.toString() && 'active'}`} onClick={() => handleElement(subItem.link, subItem.actions[values.rolId], index, subIndex)}>
                            <Box px={[1]} mr={['12px']} style={{minWidth: '52px'}} display={['flex']} justifyContent={['center']}>
                              <span className={toggle && 'hide'}>{subItem.name.charAt(0).toUpperCase()}</span>
                            </Box>
                            <Box px={[0]}>
                              <Typography tag={'p'} mb={'4px'} fontSize={['15px']} fontFamily={['Graphik-Regular']} >{subItem.name}</Typography>
                            </Box>
                          </SubElement>
                        </>
                      }
                      </div>

                    ))}
                    <Hr variant={'horizontal'} background={'#fff'} mx={[2]}/>
                  </div>
                </div>
              ))}
            </Body>

            <Footer>
              <Hr variant={'horizontal'} background={'#fff'} mx={[2]}/>
              <Element className={toggle ? 'in' : 'out'} onClick={() => handleLink('/login', null)}> {/*accounts*/}
                <Box px={[1]} pr={[0]} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  <IoRepeat  fontSize={'24px'}/>
                </Box>
                <Box px={[0]} display={'flex'} justifyContent='center'>
                  <Typography tag={'p'} mb={0} ml={['17px']} fontSize={['15px']} fontFamily={['Graphik-Regular']} >Switch Account</Typography>
                </Box>
              </Element>
              <Element className={toggle ? 'in' : 'out'} onClick={() => handleLink('/notifications', null)}>
                <Box px={[1]} pr={[0]} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  <IoNotificationsSharp fontSize={'20px'}/>
                </Box>
                <Box px={[0]} display={'flex'} justifyContent='center'>
                  <Typography tag={'p'} mb={0} ml={['21px']} fontSize={['15px']} fontFamily={['Graphik-Regular']} >Notifications</Typography>
                </Box>
              </Element>
              <Element className={toggle ? 'in' : 'out'} onClick={() => handleLink('/settings', null)}>
                <Box px={[1]} pr={[0]} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  <IoSettingsSharp fontSize={'20px'}/>
                </Box>
                <Box px={[0]} display={'flex'} justifyContent='center'>
                  <Typography tag={'p'} mb={0} ml={['21px']} fontSize={['15px']} fontFamily={['Graphik-Regular']} >Settings</Typography>
                </Box>
              </Element>
              <Element className={toggle ? 'in' : 'out'}>
                <Box px={[0]} pr={[0]} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  <Checkbox variant={'default'} color={['light']} px={[0]} name='persist' value={values.persist} handleChange={handleChange}></Checkbox>
                </Box>
                <Box px={[0]} display={'flex'} justifyContent='center'>
                  <Typography tag={'p'} mb={0} ml={['12px']} fontSize={['15px']} fontFamily={['Graphik-Regular']} onClick={() => handleChange(!values.persist)}>Keep session alive</Typography>
                </Box>
              </Element>
            </Footer>
          </Container>
        )}
      </Consumer>
    </Wrapper>
  )
}

export default Sidebar
