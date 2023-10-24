import { useState, KeyboardEvent, ChangeEvent } from "react";
import styled from "styled-components";

import Search from "../assets/explore.svg";


const Searchbar = () => {

  const [text, setText] = useState<string>('');

  const handleKeyPress = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setText('');
    }
  }

  return(
    <Container>
      <Icon src={Search} />
      <Form>
        <Input
          type='text'
          placeholder="Search"
          value={text}
          onChange={handleKeyPress}
          onKeyDown={handleEnter}
        />
      </Form>
    </Container>
  )
}

export default Searchbar

const Container = styled.div`
  width: 350px;
  height: 40px;
  background-color: #16181C;
  margin: 10px 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  pointer-events: none;
`

const Form = styled.form`
`

const Input = styled.input`
  width: 270px;
  height: 25px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 15px;
`