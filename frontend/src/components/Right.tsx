import styled from "styled-components"
import Searchbar from "./Searchbar"

const Right = () => {

  return(
    <Container>
      <Searchbar />
    </Container>
  )
}

export default Right

const Container = styled.div`
  border-left: 1px solid #222222;
  padding: 0 20px 0 20px;
  min-width: 10px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`