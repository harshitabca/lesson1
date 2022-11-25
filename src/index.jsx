import React from 'react'
import ReactDOM from 'react-dom'
import Header from './component/Header';

const container = document.getElementByID('root')
const root = ReactDOM.createRoot(container)
root.render(<Header />)

if (import.meta.hot) {
	import.meta.hot.accept()
	}
