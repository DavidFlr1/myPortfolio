import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import theme from '../utils/theme'
import { color, typography, layout, space, variant } from 'styled-system'

import { FaFolderPlus, FaTrash, FaFile, FaFileAlt, FaFileImage, FaFileCsv, FaFileInvoice, FaFileVideo, FaFileAudio} from 'react-icons/fa'

import Typography from './Typography'
import { Flex, Box } from './Grid'

const Styled = styled.div`
  height: 100%;
  padding: 0 7px;
  display: flex;
  ${typography}
  ${color}
  ${space}
  ${layout}
  ${variant({
    variants: {
      default: {
        background: 'yellow',
      },
      rounded: {
        border: `1px solid ${theme.colors.extended.gray300}`,
        borderRadius: '20px',
      }
    },
  })}
`

const Container = styled.div`
overflow: auto;
`

const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
`

const Placeholder = styled.p`
  position: absolute;
  top: -10px;
  left: 12px;
  font-size: 10px;
  background: #fff;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
`

const Tooltip = styled.div`
  position: absolute;
  left: 42px;
  opacity: 0;
  color: #fff;
  padding: 0 5px 4px 5px;
  font-size: 14px;
  border: 1px solid #fff;
  border-radius: 4px;
  line-height: 1.3;
  background: ${theme.colors.extended.gray700};
  z-index: 999;
  transition: 0.2s ease-out 0s;
  &:hover {
    transition: 0.4s ease-out 0.6s;
    opacity: 1
  }
`

const FileInput = ({ handleChange ,children, tag, ...props }) => {
  const [id, setId] = useState(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5))
  const [icon, setIcon] = useState(<FaFileImage fontSize={'28px'}/>)
  const [file, setFile] = useState({name: '', placeholder: 'Upload file', value: '', size: ''})
  const [maxSize, setMaxSize] = useState(props.maxSize ? props.maxSize : '5242880')
  const [accept, setAccept] = useState('')

  const handleType = () => {
    switch(props.type) {
      case 'any':
        setFile({name: props.name, placeholder: 'Upload file', value: props.value, size: `${Math.round((maxSize / 1024))} KB Max`})
        setAccept('*')
        setIcon(<FaFile fontSize={'25px'} color={theme.colors.secondary.red700}/>)
        break
      case 'docs':
        break
      case 'image':
        setFile({name: props.name, placeholder: 'Upload image', value: props.value, size: `${Math.round((maxSize / 1024))} KB Max`})
        setAccept('image/png, image/jpeg, image/jpg')
        setIcon(<FaFileImage fontSize={'25px'} color={theme.colors.secondary.red700}/>)
        break
      case 'csv':
        break
      case 'invoice':
        break
      case 'video':
        break
      case 'audio':
        break
      default:
        break
    }
  }

  const handleFile = (e) => {
    if(e.target.files.length > 0) {

      if(e.target.files[0].size <= props.maxSize) {
        let temporalFile = {
          name: props.name,
          placeholder: e.target.files[0].name,
          value: e.target.files[0].name,
          size: Math.round(e.target.files[0].size / '1024') + ' KB',
        }
        setFile(temporalFile)
        handleChange(temporalFile)
      } else {
        handleType()
        document.getElementById(id).value = ''
      }
    } else { handleType() }
  }
  
  const removeItem = () => {
    document.getElementById(id).value = ''
    handleType()
  }

  useEffect(() => {
    handleType()
  }, [])

  return (
    <Container style={{position: 'relative', overflow: 'visible'}}>
      <Placeholder>{props.placeholder}</Placeholder>
      <Styled {...props} as={tag}>
        <Box px={[0]} width={['100%']} overflow={'hidden'} >
          <label for={id} style={{display: 'flex'}} >
            <Wrapper px={[1]} width={['35px']} borderRight={`1px solid ${theme.colors.extended.gray300}`} alignItems={'center'}>
              {icon}
            </Wrapper>
            <Wrapper px={[1]} width={['100%']} borderRight={`1px solid ${theme.colors.extended.gray300}`} flexDirection={'column'} >
              <Typography mb={[0]} color={['extended.gray800']} fontSize={['14px']} fontFamily={['Graphik-Semibold']} lineHeight={['2']}>{file.placeholder}</Typography>
              <Typography mb={[0]} color={['extended.gray700']} fontSize={['12px']} fontFamily={['Graphik-Regular']}>{file.size}</Typography>
            </Wrapper>
            <Tooltip>{file.placeholder}</Tooltip>
          </label>
        </Box>
        <Wrapper px={[1]} width={['30px']} alignItems={'center'} flexDirection={'column'}>
          <label for={id} style={{lineHeight: '0'}}>
            <FaFolderPlus fontSize={'16px'}  color={theme.colors.secondary.green700} style={{marginBottom: '4px',cursor: 'pointer'}}/>
          </label>
          <FaTrash fontSize={'14px'} color={theme.colors.secondary.red700} style={{cursor: 'pointer'}} onClick={() => removeItem()}/>
        </Wrapper>
      </Styled>
      <input type='file' onChange={(e) => handleFile(e)} id={id} multiple={props.multiple} accept={accept} />
    </Container>
  )
}

Styled.defaultProps = {
  maxHeight: '50px',
  mb: 0,
}

export default FileInput
