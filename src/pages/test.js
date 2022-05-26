import React, { useState } from 'react'
import theme from '../utils/theme'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import "isomorphic-fetch"

import Section from '../components/Section'
import Container from '../components/Container'
import { Flex, Box } from '../components/Grid'

const Test = () => {
  const [error, setError] = useState(false)
  const [value, setValue] = useState('0')
  const [loading, setLoading] = useState(false)

  const validation = async () => {
    const url = new URL(`https://jsonplaceholder.typicode.com/todos/${value}`)
    let temporalError = false
    setLoading(true)

    await fetch(url)
      .then(json => {
        console.log('promise response', json)
        if(json.status == 200) {
          temporalError = false
        } else {
          temporalError = true
        }
      }).catch(error => {
        console.log('error:', error)
        temporalError = true
      });

      if(!temporalError) {
        console.log('navigate')
        navigate(`https://jsonplaceholder.typicode.com/todos/${value}`)
      } else {
        console.log('dont navigate')
      }

      setError(temporalError)
  }
  return (
    <Section>
      <Container>
        <Box width='100%' height='100vh'>
          <Flex justifyContent='center' alignItems='center'>
            <form onSubmit={(e) => {validation(); e.preventDefault()}}>
              <input onChange={(e) => setValue(e.target.value)} />
              <button onClick={() => validation()}>TEST</button>
              {error ? <Box color='red'>ERROR</Box> : <Box color='green'>SUCCESS</Box>}
            </form>
            {loading && <Box color="yellow">LOADING</Box>}
          </Flex>
        </Box>
      </Container>
    </Section>
  )
}

export default Test