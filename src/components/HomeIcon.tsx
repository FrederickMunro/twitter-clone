import styled from "styled-components";

import Twitter from "../assets/twitter.svg";

const HomeIcon = () => {

  return(
    <Button>
      <Icon src={Twitter} />
    </Button>
  )
}

export default HomeIcon

const Button = styled.button`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #111111;
  }
`

const Icon = styled.img`
height: 35px;
`