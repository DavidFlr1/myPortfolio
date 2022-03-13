import React from 'react'
import styled from 'styled-components'

import Hr from '../Hr'
import Link from '../Link'
import Input from '../Input'
import Button from '../Button'
import Dropdown from '../Dropdown'
import Checkbox from '../Checkbox'
import FileInput from '../FileInput'
import Typography from '../Typography'
import Images from '../Images'
import { DataGrid } from '@material-ui/data-grid';
import { Flex, Box } from '../Grid'

const Container = styled.div `
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 10px 20px;
  border-radius: 10px;
`

const Bx = styled(Box)`
  padding: 0 16px 0 0;
`

const gridColumns = [
  { field: 'userId', headerName: 'ID', type: 'number', width: 100, description: '', sortable: true, hide: false },
]

const RestaurantForm = ({ contents, list, activeValue, require, search, handleChange, handleAction }) => {
  return (
    <Container>
      <Flex>
        <Box width={[2/12]} px={[0]} display={'flex'} alignItems='center'>
          <Typography mb={[0]} color={['dark']} fontSize={['16px']} fontFamily={['Graphik-Medium']}>User</Typography>
        </Box>
        <Box width={[10/12]} px={[0]} display={'flex'} alignItems='center'>
          <Bx width={[2/10]}><Input placeholder="ID" variant='rounded' type="text" name="userId" autoComplete="off" value={activeValue.userId} require={require} onChange={handleChange}/></Bx>
          <Bx width={[2/10]}><Checkbox variant={'default'} color={['dark']} px={2} name='userActive' value={activeValue.userActive} handleChange={handleChange}>Active</Checkbox></Bx>
        </Box>
      </Flex>

      <Hr variant={'horizontal'} background={'#CFCFD2'} mx={[0]} mt={[2]} mb={[2]} />

      <Flex>
        <Box width={[2/12]} px={[0]} display={'flex'} alignItems='center'>
          <Typography mb={[0]} color={['dark']} fontSize={['16px']} fontFamily={['Graphik-Medium']}>Personal Information</Typography>
        </Box>
        <Box width={[10/12]} px={[0]} display={'flex'} flexWrap={'wrap'} alignItems='center'>
          <Bx mb={[2]} width={[3/10]}><Input placeholder="Sourname" variant='rounded' type="text" name="userSourname" autoComplete="off" value={activeValue.userSourname} require={require} onChange={handleChange}/></Bx>
          <Bx mb={[2]} width={[2/10]}><input placeholder="Photo" variant='rounded-file' type="file" name="userPhoto" value={''} onChange={handleChange} style={{width: '100%'}}/></Bx>
          <Bx mb={[2]} width={[2/10]}><Dropdown placeholder={activeValue.userGender === '' ? 'Gender' : activeValue.userGender} variant='rounded-light' name='userGender' items={['Male', 'Female', 'Other']} multiple={false} maxDisplay={3} handleChange={handleChange} require={require} mb={0} mt={0}/></Bx>
          <Bx width={[2/10]}><Dropdown placeholder={'Permissions'} variant='rounded-light' name='actions' items={['item']} multiple={true} selected={[false]} maxDisplay={5} handleChange={(e) => handleChange(e)} require={require} mb={0} mt={0}/></Bx>
        </Box>
      </Flex>

      <Hr variant={'horizontal'} background={'#CFCFD2'} mx={[0]} mt={[2]} mb={[2]} />

      <Box width={['100%']} px={[0]} display={'flex'}>
        <Bx width={[2/10]}><Input placeholder="Search..." variant='rounded' type="text" name="search" autoComplete="off" value={search} require={require} onChange={handleChange}/></Bx>
        <Bx width={[1/10]}><Button variant={'blue'} type='search' onClick={() => handleAction('search', {search: search})} mb='0' mt='0'>Search</Button></Bx>

        <Bx width={[4/10]} />

        <Bx mb={[0]} width={[1/10]}><Button variant={'green'} type='create' onClick={() => handleAction('create', {})} mb='0' mt='0'>Create</Button></Bx>
        <Bx mb={[0]} width={[1/10]}><Button variant={'yellow'} type='update' onClick={() => handleAction('update', {id: activeValue.userId})} mb='0' mt='0'>Update</Button></Bx>
        <Bx mb={[0]} width={[1/10]}><Button variant={'red'} type='delete' onClick={() => handleAction('delete', {id: activeValue.userId})} mb='0' mt='0'>Delete</Button></Bx>
      </Box>

      <Hr variant={'horizontal'} background={'#CFCFD2'} mx={[0]} mt={[2]} mb={[2]} />

      <Box width={['100%']} px={[0]} >
        <DataGrid rows={list} columns={gridColumns} pageSize={10} autoHeight={true}/> {/* getCellClassName={(params) => {if(params.field === 'restaurantActive'){return 'class-name'}}} */}
      </Box>
    </Container>
  )
}

export default RestaurantForm
