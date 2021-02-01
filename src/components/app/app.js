import React from 'react'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'
import './app.scss'

export default function App() {
	const data = [
		{label: 'Выучить Реакт', important: false, id : 100},
		{label: 'Сделать первое приложение на реакте', important: false, id : 101},
		{label: 'Выпить кофе', important: false, id : 102},
	]
	return (
		<div className="app">
			<AppHeader/>
			<div className='search-panel d-flex'>
				<SearchPanel/>
				<PostStatusFilter/>
			</div>
			<PostList posts={data}/>
			<PostAddForm/>
		</div>
	)
}
