import {Routes, Route} from 'react-router-dom'; 
import React, { Component }  from 'react';


import MainPage from './Componets/MainPage/MainPage'
import Сonversion from './Componets/PackageСonversion/Сonversion'


import Layout from './Componets/Layout'
class App extends React.Component {
	  render() {
		return (
			<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<MainPage/>} />
					<Route path='conversion' element={<Сonversion/>} />
				</Route>
			</Routes>
			</>
		)
  }
}
export default App