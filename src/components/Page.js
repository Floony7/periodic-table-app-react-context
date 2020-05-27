import React from "react"
import Inner from "./Inner"
import Header from "./Header"
import styled from "styled-components"

const PageStyles = styled.div`
  background: rgb(6, 242, 101);
  background: linear-gradient(90deg, rgba(6, 242, 101, 1) 14%, rgba(145, 68, 238, 1) 100%);
  min-height: 100vh;
`

const Page = ({ children }) => {
  return (
    <PageStyles>
      <Header />
      <Inner>{children}</Inner>
    </PageStyles>
  )
}

export default Page
