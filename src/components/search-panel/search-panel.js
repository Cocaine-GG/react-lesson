import React from 'react'
import './search-panel.scss'

const SearchPanel = () => {
	return (
		<input className='search-input form-control'
					 type='text'
					 placeholder='Поиск по записям'
		/>
	)
}

export default SearchPanel
