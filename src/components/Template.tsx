import styled from "styled-components"

import Left from "./Left"
import Middle from "./Middle"
import Right from "./Right"
import Messages from "./Messages"


const Template = () => {

  return(
    <Container>
      <Messages />
      <Left />
      <Middle />
      <Right />
    </Container>
  )
}

export default Template

const Container = styled.div`
  display: flex;
  justify-content: center;
`