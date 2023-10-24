import { Link } from "react-router-dom";
import styled from "styled-components";

import MenuItem from "./MenuItem";

import Home from "../assets/home.svg";
import Explore from "../assets/explore.svg";
import Notifications from "../assets/notification.svg";
import Messages from "../assets/messages.svg";
import Bookmarks from "../assets/bookmark.svg";
import Profile from "../assets/profile.svg";

const Menu = () => {

  const MenuItemsList = [
    { name: 'Home', icon: Home },
    { name: 'Explore', icon: Explore },
    { name: 'Notifications', icon: Notifications },
    { name: 'Messages', icon: Messages },
    { name: 'Bookmarks', icon: Bookmarks },
    { name: 'Profile', icon: Profile },
  ]

   return(
    <Nav>
      {
        MenuItemsList.map(item => {
          return(
            <StyledLink to={`/${item.name.toLowerCase()}`}>
              <MenuItem
                name={item.name}
                icon={item.icon}
                key={item.name}
              />
            </StyledLink>
          )
        })
      }
    </Nav>
   )
}

export default Menu

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 350px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  pointer-events: none;
`