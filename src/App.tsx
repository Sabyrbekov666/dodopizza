import './App.css'
import { AuthRootComponenets } from './components/auth'
import { Popup } from './components/header/popup'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<Popup />
			<Routes>
				<Route path='/login' element={<AuthRootComponenets />} />
				<Route path='/register' element={<AuthRootComponenets />} />
			</Routes>
		</div>
	)
}

export default App
