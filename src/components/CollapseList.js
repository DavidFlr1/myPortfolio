import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

import Typography from './Typography'
import { Flex, Box } from './Grid'
import theme from "../utils/theme";

const CollapseSection = styled.div `
  cursor: pointer;
`

const Image = styled.img`
  width: 30px;
  height: 30px;
`

const ArrowBox = styled.div `
  padding-left: 80%;
  position: relative;
`

const CollapseWrapper = styled.div`
  display: block;
  position: relative;
  cursor: default;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;
  ${({ active, bodyHeight }) =>
    active && css`
      height: ${bodyHeight}px;
    `}
`

const CollapseList = ({ image, title, children, state }) => {
  const [collapsed, setCollapsed] = useState(state)
  const [bodyHeight, setBodyHeight] = useState(0);

  const item = useRef(null);

  useEffect(() => {
    setCollapsed(state)
  }, [state])

  return (
    <CollapseSection>
      <Flex onClick={() => { setCollapsed(!collapsed); setBodyHeight(item.current.clientHeight); }}>
         {image && <Box px={0} width={['10%']} display="flex" alignItems="center"> <Image src={image} alt=""/> </Box> }
         <Box px={0} width={image ? ['80%'] : ['90%']} > <Typography mb={[0]} color={theme.colors.dark} >{title}</Typography> </Box>
         <Box px={0} width={['10%']} display="flex" alignItems="center" >
          {collapsed ? <ArrowBox><BiChevronDown fontSize='24px' cursor='pointer'  /></ArrowBox> : <ArrowBox><BiChevronUp fontSize='24px' cursor='pointer'  /></ArrowBox>}
         </Box>
       </Flex>

      <CollapseWrapper active={collapsed} bodyHeight={bodyHeight}>
        <Box px={0} pb={0} ref={item} style={{position: 'absolute'}}>{children}</Box>
      </CollapseWrapper>
    </CollapseSection>
  );
}

export default CollapseList

// Example
//  <CollapseList image={null} title={'ExampleTitle'} state={index === 1} >
//    <>
//      <p>ExampleContent</p>
//      <div dangerouslySetInnerHTML={{ __html: rawContent}} />
//    </>
//  </CollapseList>