import React, { useState } from 'react'
import Dashboard from '../Main/Dashboard'

import BranchForm from '../../components/Forms/BranchForm'

const Restaurant = () => {
  const [require, setRequire] = useState({})
  const [search, setSearch] = useState('')
  const [list, setList] = useState([])
  const [values, setValues] = useState({
    id: 1,
    userId: '',
  })

  const handleChange = e => {
    if(e.target) {
      const { name, value } = e.target // Type input
      setValues({...values, [name]: value})
      name === 'search' && setSearch(value)
    } else {
      const { name, value, item, check } = e // Type dropdown or checkbox
      setValues({...values, [name]: value})
    }
  }

  const handleAction = (action, data) => {
    switch(action) {
      case 'search':
        const request = [{field: 'search', param: ''}]
        const validate = formValidation(request)

        if(validate) {
          console.log(data)
        }

        break
      case 'create':
        console.log(data)
        break
      case 'update':
        console.log(data)
        break
      case 'delete':
        console.log(data)
        break
      case 'other':
        console.log(data)
        break
    }
  }

  const formValidation = (request) => {
    let temporalRequire = {}
    request.map(item => {
      if(item.field === 'search' && search === '') {
        temporalRequire = {...temporalRequire, [item.field]: true}
      } else {
        if(values[item.field] === '') {
          temporalRequire = {...temporalRequire, [item.field]: true}
        }
      }
    })

    setRequire(temporalRequire)
    return Object.keys(temporalRequire).length === 0 ? true : false
  }


  return (
    <Dashboard>
      <BranchForm contents={null} list={list} activeValue={values} require={require} search={search} handleChange={handleChange} handleAction={handleAction} />
    </Dashboard>
  )
}

export default Restaurant
