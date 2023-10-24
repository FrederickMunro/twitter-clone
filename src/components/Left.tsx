import styled from "styled-components";

import Menu from "./Menu";
import HomeIcon from "./HomeIcon";

const Left = () => {

  return(
    <Container>
      <HomeIcon />
      <Menu />
    </Container>
  )
}

export default Left

const Container = styled.div`
  border-right: 1px solid #222222;
  padding: 0 20px 0 20px;
  height: 100vh;
`