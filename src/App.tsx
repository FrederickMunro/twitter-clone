import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Left from "./components/Left";
import Right from "./components/Right";
import Messages from "./components/Messages";
import MessagesTab from "./components/MessagesTab"
import Home from "./components/Home";
import Bookmarks from "./components/Bookmarks";
import Explore from "./components/Explore";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";

function App() {

	return (
		<Container>
			<Messages />
			<Left />
			<Routes>
				<Route path='/home' element={ <Home /> } />
				<Route path='/explore' element={ <Explore /> } />
				<Route path='/notifications' element={ <Notifications /> } />
				<Route path='/messages' element={ <MessagesTab /> } />
				<Route path='/bookmarks' element={ <Bookmarks /> } />
				<Route path='/Profile' element={ <Profile /> } />
			</Routes>
      <Right />
    </Container>
	)
}

export default App

const Container = styled.div`
  display: flex;
  justify-content: center;
`
