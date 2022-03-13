import React, { Component, createContext } from 'react'

export const MyContext = createContext()

export const Provider = MyContext.Provider
export const Consumer = MyContext.Consumer

// import { MyContext } from '../../context/context'
class MyContextProvider extends Component {
  // const context = useContext(MyContext)
  state = {
    example: '',
  }

  render() {
    return (
      <Provider value={{
        state: this.state,
        setAutority: (data) => {
          this.setState({
            example: data,
          })
        }
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default MyContextProvider
