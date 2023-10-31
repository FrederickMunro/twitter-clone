import styled from "styled-components"

interface MenuItemProps {
  name: string;
  icon: string;
}

const MenuItem = ({ name, icon }: MenuItemProps) => {
  return(
    <Button>
      <Icon src={icon} />
      <H3>{name}</H3>
    </Button>
  )
}

export default MenuItem

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  min-height: 30px;
  height: 10vh;
  max-height: 50px;
  padding: 9px 20px 11px 10px;
  border-radius: 30px;
  align-self: flex-start;
  &:hover {
    background-color: #111111;
  }
`

const Icon = styled.img`
  height: 100%;
  padding-right: 30px;
`

const H3 = styled.h3`
  font-size: 23px;
  font-weight: lighter;
`