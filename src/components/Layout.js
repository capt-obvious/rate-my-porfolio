import React from 'react'
import styled from 'styled-components'
import NavBar from './Navbar'

const NAV_WIDTH = '25%'

const PageLayout = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: ${NAV_WIDTH} calc(100% - ${NAV_WIDTH});
`

const Layout = (props) => {
  return <PageLayout>
    <NavBar />
    {props.children}
  </PageLayout>
}

export default Layout
