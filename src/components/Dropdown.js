import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import theme from '../utils/theme'
import { color, typography, layout, space, variant } from 'styled-system'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const Container = styled.div `
  display: inline-flex;
  flex-direction: column;
  line-height: 20px;
  ${space}
  ${layout}
`

const StyledDropdown = styled.button`
  width: 100%;
  color: ${theme.colors.extended.gray600};
  outline: none;
  border: none;
  padding: 8px 12px;
  z-index: 999;
  text-align: left;
  overflow: hidden;
  margin-bottom: 0 !important;
  margin-top: 0 !important;
  &:focus {
    border-color: ${theme.colors.extended.gray500};
  }
  ${typography}
  ${color}
  ${space}
  ${layout}
  ${variant({
    variants: {
      default: {
        background: `${theme.colors.extended.gray200}`,
        border: `1px solid ${theme.colors.extended.gray300}`,
        borderRadius: '6px',
      },
      rounded: {
        background: `${theme.colors.extended.gray200}`,
        border: `1px solid ${theme.colors.extended.gray300}`,
        borderRadius: '20px',
      },
      'rounded-shadow': {
        background: `${theme.colors.extended.gray200}`,
        boxShadow: `0 0 12px ${theme.colors.extended.gray400}`,
        border: `1px solid ${theme.colors.extended.gray500}`,
        borderRadius: '20px',
      },
      'rounded-light': {
        background: `${theme.colors.light}`,
        border: `1px solid ${theme.colors.extended.gray300}`,
        borderRadius: '20px',
      },
    },
  })}
`

const Arrow = styled.span `
  position: absolute;
  top: -8px;
  right: -12px;
  height: 36px;
  width: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  &:hover {
    background: ${theme.colors.extended.gray400};
    border-radius: 2px 0 0 2px;
  }
`

const ListWrapper = styled.div.attrs((props) => ({ className: props.className })) `
  position: relative;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 998;
  &.dropdown-display {
    transform: translateY(2px);
    animation: display 0.3s forwards;
    @keyframes display {
      from {opacity: 0}
      to {opacity: 1; visibility: visible; z-index: 9998;}
    }
  }
  &.dropdown-hide {
    transform: translateY(-2px);
    animation: hide 0.3s forwards;
    @keyframes hide {

      from {opacity: 1;}
      to {opacity: 0; visibility: hidden;}
    }
  }
`

const List = styled.ul`
  width: 100%;
  // max-height: 135px
  padding: 13px 0 6px 0;
  margin-top: -15px;
  border-top: none;
  border-radius: 0 0 20px 20px;
  background: ${theme.colors.extended.gray200};
  position: absolute;
  overflow-y: auto;
  list-style: none;
`
  
const Item = styled.li.attrs((props) => ({ className: props.className }))`
  color: ${theme.colors.dark};
  cursor: pointer;
  padding: 6px 10px;
  border: 2px solid ${theme.colors.extended.gray200};
  border-bottom: none;
  &:hover {
    color: ${theme.colors.dark};
    background-color: ${theme.colors.extended.gray300};
    border-radius: 8px;
  }
  &.dropdown-active {
    background-color: ${theme.colors.extended.gray400};
    border: 2px solid ${theme.colors.extended.gray200};
    border-radius: 8px;
    border-bottom: none;
  }
`

const Dropdown = ({ items, name, placeholder, multiple, selected, require, maxDisplay, handleChange, children, tag, ...props }) => {
  const [id, setId] = useState(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5))
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [single, setSingle] = useState({item: placeholder, name: name})
  const [multiples, setMultiples] = useState([])

  const handleSingleSelect = (index, item) => {
    setSingle({value: index, item: item, name: name})
    setActive(index)
    setOpen(false)

    handleChange({value: index, item: item, name: name})
  }

  const handleMultiplesSelect = (index, item) => {
    let temporalArray = multiples 

    if(temporalArray.find(element => element.value === index)) {
      document.getElementById(index + id).classList.remove('dropdown-active')
      temporalArray.splice(temporalArray.findIndex(find => find.value === index), 1)
    } else {
      document.getElementById(index + id).classList.add('dropdown-active')
      temporalArray.push({value: index, item: item, name: name})
    }
    
    setMultiples(temporalArray)
    handleChange(temporalArray)
  }

  const handleSelected = () => {
    let temporalArray = []
      
    selected && selected.map((value, index) => {
      if(value){
        document.getElementById(index + id).classList.add('dropdown-active')
        temporalArray.push({value: index, item: items[index], name: name})
      } else {
        document.getElementById(index + id).classList.remove('dropdown-active')
      }
    })

    setMultiples(temporalArray)
    handleChange(temporalArray)
  }

  useEffect(() => {
    if(multiple) {
      handleSelected()
    }
  }, [open])

  return (
    <Container {...props} onMouseLeave={() => setOpen(false)} autoFocus={true}>
      <StyledDropdown {...props} as={tag} onClick={() => setOpen(!open)} type='button' style={{zIndex: open && '9999', color: require[name] && `${theme.colors.secondary.red700}`}}>
        <div style={{position: 'relative'}}>{single.item} <Arrow>{open ? <FaAngleUp color='#1D252D' /> : <FaAngleDown color={require[name] ? `${theme.colors.secondary.red700}` : '#1D252D'} />}</Arrow></div>
      </StyledDropdown>
      <ListWrapper className={!open ? 'dropdown-hide' : 'dropdown-display'}>
        <List style={{maxHeight: (maxDisplay * 45)}}>
          {items.map((item, index) => (
            multiple ? 
              <Item onClick={() => handleMultiplesSelect(index, item)} id={index + id} className="" key={index}>
                {item}
              </Item>
            :
              <Item onClick={() => handleSingleSelect(index, item)} className={active === index ? 'dropdown-active' : ''} key={index}>
                {item}
              </Item>
          ))}
        </List>
      </ListWrapper>
    </Container>
  )
}

Container.defaultProps = {
  width: '100%',
  mb: 3,
}

export default Dropdown

