import { ReactNode } from "react"
import styled from "styled-components"

interface MiddleProps {
  title: string;
  children: ReactNode;
}

const Middle = ({ title, children }: MiddleProps) => {

  return(
    <Container>
      <H1>{title}</H1>
      {children}
    </Container>
  )
}

export default Middle

const Container = styled.div`
  padding: 0 20px 0 20px;
  width: 600px;
  height: 100vh;
`

const H1 = styled.h1`
  
`