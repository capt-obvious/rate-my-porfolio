import React from 'react'
import { Spinner } from 'reactstrap'
import { AbsoluteCenterContainer } from './Containers'

const Loading = (props) => {
  return <AbsoluteCenterContainer><Spinner color="primary" {...props} /></AbsoluteCenterContainer>
}

export default Loading
