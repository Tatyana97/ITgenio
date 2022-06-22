import {Routes, Route} from 'react-router-dom'; 
import React, { Component }  from 'react';


import {Layout, MainPage, Сompare, Сonversion} from './Componets/index'

class App extends React.Component {
	  render() {
		return (
			<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<MainPage/>} />
					<Route path='conversion' element={<Сonversion/>} />
					<Route path='compare' element={<Сompare/>} />
				</Route>
			</Routes>
			</>
		)
  }
}
export default App