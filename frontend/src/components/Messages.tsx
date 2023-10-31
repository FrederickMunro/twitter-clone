import { useState } from "react";
import styled from "styled-components"

import ArrowUp from "../assets/arrowup.svg";
import ArrowDown from "../assets/arrowdown.svg";

interface Props {
  class: string;
  count: number;
}

const Messages = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [className, setClassName] = useState<string>('none');
  const [count, setCount] = useState<number>(0);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setClassName(isOpen ? 'close' : 'open')
    setCount(count+1);
  }

  return(
    <Container>
      <Header onClick={() => handleOpen()}>
        <H3>Messages</H3>
        <Button>
          <Icon src={isOpen ? ArrowDown : ArrowUp} />
        </Button>
      </Header>
      <Body class={className} count={count}>

      </Body>
    </Container>
  )
}

export default Messages

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  right: 20px;
  width: 350px;
  box-shadow: 0px 0px 10px #666666;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  height: 55px;
  cursor: pointer;
`

const H3 = styled.h3`
  font-size: 23px;
  user-select: none;
`

const Button = styled.button`
  pointer-events: none;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #111111;
  }
`

const Icon = styled.img`
  width: 30px;
  height: 30px;
`

const Body = styled.div<Props>`
  height: 0px;
  animation: ${props => (props.class === "open" ? 'openAnim' : props.count > 0 ? 'closeAnim' : '')} 0.2s ease-in 0s forwards;
  &.open {
    @keyframes openAnim {
      from {
        height: 0px;
      }
      to {
        height: 400px;
      }
    }
  }
  &.close {
    @keyframes closeAnim {
      from {
        height: 400px;
      }
      to {
        height: 0px;
      }
    }
  }
`